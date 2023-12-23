package handlers

import (
	"shoppy_backend/shoppy_backend/services"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

// Define Order Handlers
func ListOrders(context *fiber.Ctx) error {
	// get user's claims
	user := context.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)

	// get user's orders
	page := 1
	parameters := context.Queries()

	if parameters["page"] != "nil" {
		page, _ = strconv.Atoi(parameters["page"])
	}

	response := services.FetchOrders(int32(claims["id"].(float64)), int32(page))

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}

func ShowOrder(context *fiber.Ctx) error {
	// get user's claims
	user := context.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)

	// get user's order
	response := services.FetchOrder(int32(claims["id"].(float64)), context.Params("code"))

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}

func CreateOrder(context *fiber.Ctx) error {
	// get user's claims
	user := context.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)

	// create user's order
	response := services.CreateOrder(int32(claims["id"].(float64)), string(context.Body()))

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}

func CancelOrder(context *fiber.Ctx) error {
	// get user's claims
	user := context.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)

	// cancel user's order
	response := services.CancelOrder(int32(claims["id"].(float64)), context.Params("code"))

	// response
	return context.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}
