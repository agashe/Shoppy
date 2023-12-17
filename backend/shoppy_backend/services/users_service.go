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

func GetUser(email string) *pb.GetUserResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewUserOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.GetUser(ctx, &pb.GetUserRequest{
		Email: email,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}

func CreateUser(user models.User) *pb.CreateUserResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewUserOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.CreateUser(ctx, &pb.CreateUserRequest{
		Name:     user.Name,
		Email:    user.Email,
		Address:  user.Address,
		Password: user.Password,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}

func UpdateUser(user models.User) *pb.UpdateUserResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	c := pb.NewUserOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := c.UpdateUser(ctx, &pb.UpdateUserRequest{
		Id:       user.Id,
		Name:     user.Name,
		Email:    user.Email,
		Address:  user.Address,
		Password: user.Password,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}
