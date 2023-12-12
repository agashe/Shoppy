package routes

import (
	"shoppy_backend/shoppy_backend/handlers"

	"github.com/gofiber/fiber/v2"
)

// Define User Routes
func UserRoutes(app *fiber.App, prefix string) {
	routes := app.Group(prefix + "/users")

	routes.Get("/profile", handlers.Profile)
	routes.Put("/profile", handlers.UpdateProfile)
}
