package handlers

import (
	"context"
	"log"
	pb "shoppy_backend/shoppy_backend/api"
	"shoppy_backend/shoppy_backend/models"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

const address string = "localhost:50051"

// Define Home Handlers
func Homepage(con *fiber.Ctx) error {
	return con.JSON(fiber.Map{
		"status":  true,
		"message": "Homepage content was loaded successfully !",
		"data":    nil,
	})
}

func About(con *fiber.Ctx) error {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewHomeOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.FetchAboutPage(ctx, &pb.FetchAboutPageRequest{})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return con.JSON(fiber.Map{
		"status":  response.GetStatus(),
		"message": response.GetMessage(),
		"data":    response.GetData(),
	})
}

func Contact(con *fiber.Ctx) error {
	message := new(models.Message)

	if err := con.BodyParser(message); err != nil {
		return err
	}

	validate := validator.New(validator.WithRequiredStructEnabled())
	err := validate.Struct(message)

	if err != nil {
		return con.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  false,
			"message": "Invalid message",
			"data":    err.Error(),
		})
	}

	address := "localhost:50051"

	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	c := pb.NewHomeOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	r, err := c.SendContactUsMessage(ctx, &pb.SendContactUsMessageRequest{
		Name:  message.Name,
		Email: message.Email,
		Body:  message.Body,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return con.JSON(fiber.Map{
		"status":  r.GetStatus(),
		"message": r.GetMessage(),
		"data":    r.GetData(),
	})
}
