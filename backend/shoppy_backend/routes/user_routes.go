package routes

import (
	"shoppy_backend/shoppy_backend/handlers"

	"github.com/gofiber/fiber/v2"
)

// Define User Routes
func UserRoutes(app *fiber.App, prefix string) {
	routes := app.Group(prefix)

	routes.Post("/sign-in", handlers.SignIn)
	routes.Post("/sign-up", handlers.SignUp)
	routes.Get("/profile", handlers.Profile)
	routes.Put("/profile", handlers.UpdateProfile)
}
