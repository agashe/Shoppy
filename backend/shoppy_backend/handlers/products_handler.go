package handlers

import (
	"github.com/gofiber/fiber/v2"
)

func Products(context *fiber.Ctx) error {
	switch context.Params("operation") {
	case "c":
		return context.JSON(fiber.Map{
			"status":  true,
			"message": "Category's products were loaded successfully !",
			"data":    nil,
		})
	case "s":
		return context.JSON(fiber.Map{
			"status":  true,
			"message": "Search results were loaded successfully !",
			"data":    nil,
		})
	case "p":
		return context.JSON(fiber.Map{
			"status":  true,
			"message": "Product's details was loaded successfully !",
			"data":    nil,
		})
	default:
		return context.JSON(fiber.Map{
			"status":  false,
			"message": "Invalid operation !",
			"data":    nil,
		})
	}
}
