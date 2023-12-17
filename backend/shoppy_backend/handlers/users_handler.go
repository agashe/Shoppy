package handlers

import (
	"shoppy_backend/shoppy_backend/models"
	"shoppy_backend/shoppy_backend/services"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func Profile(context *fiber.Ctx) error {
	// get user's claims
	user := context.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)

	// get user's profile
	response := services.GetUser(claims["email"].(string))

	return context.JSON(fiber.Map{
		"status":  true,
		"message": "User's profile was loaded successfully !",
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

	// update user's profile
	response := services.UpdateUser(*user)

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}
