package handlers

import (
	"shoppy_backend/shoppy_backend/services"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func Products(context *fiber.Ctx) error {
	page := 1

	if context.Params("page") != "nil" {
		page, _ = strconv.Atoi(context.Params("page"))
	}

	switch context.Params("operation") {
	case "c":
		categoryId := 0

		if context.Params("arg") != "" {
			categoryId, _ = strconv.Atoi(context.Params("arg"))
		}

		response := services.FetchProducts(int32(categoryId), "", int32(page))

		return context.JSON(fiber.Map{
			"status":  response.GetStatus(),
			"message": response.GetMessage(),
			"data":    response.GetData(),
		})
	case "s":
		response := services.FetchProducts(0, context.Params("arg"), int32(page))

		return context.JSON(fiber.Map{
			"status":  response.GetStatus(),
			"message": response.GetMessage(),
			"data":    response.GetData(),
		})
	case "p":
		id := 0

		if context.Params("arg") != "" {
			id, _ = strconv.Atoi(context.Params("arg"))
		}

		response := services.FetchProduct(int32(id))

		return context.JSON(fiber.Map{
			"status":  response.GetStatus(),
			"message": response.GetMessage(),
			"data":    response.GetData(),
		})
	default:
		return context.JSON(fiber.Map{
			"status":  false,
			"message": "Invalid operation !",
			"data":    nil,
		})
	}
}
