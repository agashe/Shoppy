package routes

import (
	"shoppy_backend/shoppy_backend/handlers"

	"github.com/gofiber/fiber/v2"
)

// Define Home Routes
func HomeRoutes(app *fiber.App, prefix string) {
	routes := app.Group(prefix)

	routes.Get("/", handlers.Homepage)
	routes.Get("/about", handlers.About)
	routes.Post("/contact", handlers.Contact)
}
