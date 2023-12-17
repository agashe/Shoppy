package handlers

import (
	"shoppy_backend/shoppy_backend/models"
	"shoppy_backend/shoppy_backend/services"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
)

// Define Home Handlers
func Homepage(context *fiber.Ctx) error {
	// process
	response := services.GetHomePageContent()

	// response
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "Homepage content was loaded successfully !",
		"data":    response.GetData(),
	})
}

func About(context *fiber.Ctx) error {
	// process
	response := services.GetAboutPageContent()

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}

func Contact(context *fiber.Ctx) error {
	// serialization
	message := new(models.Message)

	if err := context.BodyParser(message); err != nil {
		return err
	}

	// validation
	validate := validator.New(validator.WithRequiredStructEnabled())
	err := validate.Struct(message)

	if err != nil {
		return context.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  false,
			"message": "Invalid message",
			"data":    err.Error(),
		})
	}

	// process
	response := services.SubmitContactUsMessage(*message)

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}
