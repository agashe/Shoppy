package handlers

import (
	"log"
	"os"
	"shoppy_backend/shoppy_backend/models"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
)

// Define Auth Handlers
func SignIn(context *fiber.Ctx) error {
	// load .env variables
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	credentials := new(models.Credentials)

	if err := context.BodyParser(credentials); err != nil {
		return err
	}

	// Throws Unauthorized error
	if credentials.Email != "ahmed@example.com" || credentials.Password != "12345678" {
		return context.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status":  false,
			"message": "Invalid Credentials !",
			"data":    nil,
		})
	}

	// Create the Claims
	claims := jwt.MapClaims{
		"name": "John Doe",
		"exp":  time.Now().Add(time.Hour * 72).Unix(),
	}

	// Create token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Generate encoded token and send it as response.
	userToken, err := token.SignedString([]byte(os.Getenv("JWT_KEY")))

	if err != nil {
		return context.SendStatus(fiber.StatusInternalServerError)
	}

	return context.JSON(fiber.Map{
		"status":  true,
		"message": "User signed in successfully !",
		"data": fiber.Map{
			"user":  "joe",
			"token": userToken,
		},
	})
}

func SignUp(context *fiber.Ctx) error {
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "User's order was loaded successfully !",
		"data":    nil,
	})
}
