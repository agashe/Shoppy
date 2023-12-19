package handlers

import (
	"log"
	"os"
	"shoppy_backend/shoppy_backend/models"
	"shoppy_backend/shoppy_backend/services"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
	"golang.org/x/crypto/bcrypt"
)

// Define Auth Handlers
func SignIn(context *fiber.Ctx) error {
	// load .env variables
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// serialize input
	credentials := new(models.Credentials)

	if err := context.BodyParser(credentials); err != nil {
		return err
	}

	// get user data
	user := services.GetUser(credentials.Email)

	// validate user credentials
	check := bcrypt.CompareHashAndPassword([]byte(user.Data.GetPassword()), []byte(credentials.Password))

	if check != nil {
		return context.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status":  false,
			"message": "Invalid Credentials !",
			"data":    nil,
		})
	}

	// create the Claims
	claims := jwt.MapClaims{
		"id":      user.Data.GetId(),
		"name":    user.Data.GetName(),
		"email":   user.Data.GetEmail(),
		"address": user.Data.GetAddress(),
		"exp":     time.Now().Add(time.Hour * 72).Unix(),
	}

	// create token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// generate encoded token and send it as response.
	userToken, err := token.SignedString([]byte(os.Getenv("JWT_KEY")))

	if err != nil {
		return context.SendStatus(fiber.StatusInternalServerError)
	}

	// response
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "User signed in successfully !",
		"data": fiber.Map{
			"id":      user.Data.GetId(),
			"name":    user.Data.GetName(),
			"email":   user.Data.GetEmail(),
			"address": user.Data.GetAddress(),
			"token":   userToken,
		},
	})
}

func SignUp(context *fiber.Ctx) error {
	// serialize input
	user := new(models.User)

	if err := context.BodyParser(user); err != nil {
		return err
	}

	// validate
	validate := validator.New(validator.WithRequiredStructEnabled())
	err := validate.Struct(user)

	if err != nil {
		return context.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  false,
			"message": "Invalid user data",
			"data":    err.Error(),
		})
	}

	// handle user already exists case
	userAlreadyExists := services.GetUser(user.Email)

	if userAlreadyExists.Data.Id != 0 {
		return context.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  false,
			"message": "This email address is already connected to account",
			"data":    "",
		})
	}

	// encrypt user's password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)

	if err != nil {
		return context.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  false,
			"message": "Error : can't generate secure password",
			"data":    err.Error(),
		})
	}

	user.Password = string(hashedPassword)

	// create user's profile
	response := services.CreateUser(*user)

	// create the Claims
	claims := jwt.MapClaims{
		"id":      response.Data.GetId(),
		"name":    user.Name,
		"email":   user.Email,
		"address": user.Address,
		"exp":     time.Now().Add(time.Hour * 72).Unix(),
	}

	// create token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// generate encoded token and send it as response.
	userToken, err := token.SignedString([]byte(os.Getenv("JWT_KEY")))

	if err != nil {
		return context.SendStatus(fiber.StatusInternalServerError)
	}

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data": fiber.Map{
			"id":      response.Data.GetId(),
			"name":    response.Data.GetName(),
			"email":   response.Data.GetEmail(),
			"address": response.Data.GetAddress(),
			"token":   userToken,
		},
	})
}
