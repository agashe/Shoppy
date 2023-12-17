package main

import (
	"log"
	"os"
	"shoppy_backend/shoppy_backend/middlewares"
	"shoppy_backend/shoppy_backend/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"github.com/qinains/fastergoding"
)

const (
	port   = "5000"
	prefix = "/api/v1"
)

func main() {
	// load .env variables
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// enable hot reloading for development environment
	envVal, exists := os.LookupEnv("ENV")

	if exists && (envVal == "development") {
		fastergoding.Run()
	}

	// create new app instance
	app := fiber.New()

	// define public routes
	routes.HomeRoutes(app, prefix)
	routes.ProductRoutes(app, prefix)
	routes.AuthRoutes(app, prefix)

	// define middlewares
	middlewares.AuthMiddleware(app)

	// define private routes
	routes.OrderRoutes(app, prefix)
	routes.UserRoutes(app, prefix)

	// start server
	log.Fatal(app.Listen(":" + port))
}
