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
	response := services.FetchOrders(int32(claims["id"].(float64)), 1)

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
	orderId := 0

	if context.Params("order_id") != "nil" {
		orderId, _ = strconv.Atoi(context.Params("id"))
	}

	response := services.FetchOrder(int32(claims["id"].(float64)), int32(orderId))

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
