package handlers

import (
	"shoppy_backend/shoppy_backend/models"
	"shoppy_backend/shoppy_backend/services"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

func Profile(context *fiber.Ctx) error {
	// get user's claims
	user := context.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)

	// get user's profile
	response := services.GetUser(claims["email"].(string))

	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data": fiber.Map{
			"id":      response.Data.GetId(),
			"name":    response.Data.GetName(),
			"email":   response.Data.GetEmail(),
			"address": response.Data.GetAddress(),
		},
	})
}

func UpdateProfile(context *fiber.Ctx) error {
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

	// save new password
	if user.Password != "" {
		if user.Current == "" {
			return context.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status":  false,
				"message": "Invalid current password !",
				"data":    "",
			})
		}

		// get user's claims
		userProfile := context.Locals("user").(*jwt.Token)
		claims := userProfile.Claims.(jwt.MapClaims)
		response := services.GetUser(claims["email"].(string))

		// validate user credentials
		check := bcrypt.CompareHashAndPassword([]byte(response.Data.GetPassword()), []byte(user.Current))

		if check != nil {
			return context.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"status":  false,
				"message": "Invalid current password !",
				"data":    nil,
			})
		}

		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)

		if err != nil {
			return context.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status":  false,
				"message": "Error : can't generate secure password",
				"data":    err.Error(),
			})
		}

		user.Password = string(hashedPassword)
	}

	// update user's profile
	response := services.UpdateUser(*user)

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}
