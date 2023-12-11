package handlers

import (
	"shoppy_backend/shoppy_backend/models"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
)

// Define User Handlers
func SignIn(context *fiber.Ctx) error {
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "User orders were loaded successfully !",
		"data":    nil,
	})
}

func SignUp(context *fiber.Ctx) error {
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "User's order was loaded successfully !",
		"data":    nil,
	})
}

func Profile(context *fiber.Ctx) error {
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "User's order was loaded successfully !",
		"data":    nil,
	})
}

func UpdateProfile(context *fiber.Ctx) error {
	item := new(models.CartItem)

	if err := context.BodyParser(item); err != nil {
		return err
	}

	validate := validator.New(validator.WithRequiredStructEnabled())
	err := validate.Struct(item)

	if err != nil {
		return context.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  false,
			"message": "Invalid Cart Item",
			"data":    err.Error(),
		})
	}

	// ToDo : update the item

	return context.JSON(fiber.Map{
		"status":  true,
		"message": "Cart was updated successfully !",
		"data":    nil,
	})
}
