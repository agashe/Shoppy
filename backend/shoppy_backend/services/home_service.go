package services

import (
	"context"
	"log"
	"time"

	pb "shoppy_backend/shoppy_backend/api"
	"shoppy_backend/shoppy_backend/models"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

const (
	address string = "localhost:50051"
)

func GetHomePageContent() *pb.FetchHomePageResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewHomeOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.FetchHomePage(ctx, &pb.FetchHomePageRequest{})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}

func GetAboutPageContent() *pb.FetchAboutPageResponse {
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

	return response
}

func SubmitContactUsMessage(message models.Message) *pb.SendContactUsMessageResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	c := pb.NewHomeOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := c.SendContactUsMessage(ctx, &pb.SendContactUsMessageRequest{
		Name:  message.Name,
		Email: message.Email,
		Body:  message.Body,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}
