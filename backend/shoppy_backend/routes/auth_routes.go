package routes

import (
	"shoppy_backend/shoppy_backend/handlers"

	"github.com/gofiber/fiber/v2"
)

// Define Auth Routes
func AuthRoutes(app *fiber.App, prefix string) {
	routes := app.Group(prefix + "/auth")

	routes.Post("/sign-in", handlers.SignIn)
	routes.Post("/sign-up", handlers.SignUp)
}
