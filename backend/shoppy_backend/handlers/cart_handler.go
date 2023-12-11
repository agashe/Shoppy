package handlers

import (
	"shoppy_backend/shoppy_backend/models"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
)

// Define Cart Handlers
func ShowCart(context *fiber.Ctx) error {
	return context.JSON(fiber.Map{
		"status":  true,
		"message": "User cart was loaded successfully !",
		"data":    nil,
	})
}

func AddToCart(context *fiber.Ctx) error {
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

	// ToDo : save the item

	return context.JSON(fiber.Map{
		"status":  true,
		"message": "Item was added to cart successfully !",
		"data":    nil,
	})
}

func UpdateCart(context *fiber.Ctx) error {
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

func DeleteFromCart(context *fiber.Ctx) error {
	item := new(models.CartItemForDelete)

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

	// ToDo : delete the item

	return context.JSON(fiber.Map{
		"status":  true,
		"message": "Cart Item was deleted successfully !",
		"data":    nil,
	})
}