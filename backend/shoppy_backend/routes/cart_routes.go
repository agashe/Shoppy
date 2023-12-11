package routes

import (
	"shoppy_backend/shoppy_backend/handlers"

	"github.com/gofiber/fiber/v2"
)

// Define Cart Routes
func CartRoutes(app *fiber.App, prefix string) {
	routes := app.Group(prefix)

	routes.Get("/cart", handlers.ShowCart)
	routes.Post("/cart", handlers.AddToCart)
	routes.Put("/cart", handlers.UpdateCart)
	routes.Delete("/cart", handlers.DeleteFromCart)
}
