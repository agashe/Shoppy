package routes

import (
	"shoppy_backend/shoppy_backend/handlers"

	"github.com/gofiber/fiber/v2"
)

// Define Product Routes
func ProductRoutes(app *fiber.App, prefix string) {
	routes := app.Group(prefix)

	routes.Get("/products/:operation/:arg/:slug?", handlers.Products)
}
