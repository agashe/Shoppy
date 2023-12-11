package main

import (
	"log"
	"shoppy_backend/shoppy_backend/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/qinains/fastergoding"
)

const (
	port   = "5000"
	prefix = "/api/v1"
)

func main() {
	// Enable hot reloading
	fastergoding.Run()

	// create new app instance
	app := fiber.New()

	// define routes
	routes.HomeRoutes(app, prefix)
	routes.CartRoutes(app, prefix)
	routes.ProductRoutes(app, prefix)
	routes.OrderRoutes(app, prefix)
	routes.UserRoutes(app, prefix)

	// start server
	log.Fatal(app.Listen(":" + port))
}
