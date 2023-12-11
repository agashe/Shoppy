package handlers

import (
	"shoppy_backend/shoppy_backend/models"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
)

// Define Home Handlers
func Homepage(context *fiber.Ctx) error {
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "Homepage content was loaded successfully !",
		"data":    nil,
	})
}

func About(context *fiber.Ctx) error {
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "About content was loaded successfully !",
		"data": fiber.Map{
			"content": "About content !",
		},
	})
}

func Contact(context *fiber.Ctx) error {
	message := new(models.Message)

	if err := context.BodyParser(message); err != nil {
		return err
	}

	validate := validator.New(validator.WithRequiredStructEnabled())
	err := validate.Struct(message)

	if err != nil {
		return context.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  false,
			"message": "Invalid message",
			"data":    err.Error(),
		})
	}

	// ToDo : save the message

	return context.JSON(fiber.Map{
		"status":  true,
		"message": "Your Message were sent successfully !",
		"data":    nil,
	})
}
