package routes

import (
	"shoppy_backend/shoppy_backend/handlers"

	"github.com/gofiber/fiber/v2"
)

// Define Order Routes
func OrderRoutes(app *fiber.App, prefix string) {
	routes := app.Group(prefix)

	routes.Get("/orders", handlers.ListOrders)
	routes.Get("/orders/:code", handlers.ShowOrder)
	routes.Post("/orders", handlers.CreateOrder)
	routes.Delete("/orders/:code", handlers.CancelOrder)
}
