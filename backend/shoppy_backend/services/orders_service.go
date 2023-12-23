package services

import (
	"context"
	"log"
	"time"

	pb "shoppy_backend/shoppy_backend/api"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func FetchOrders(userId int32, page int32) *pb.FetchOrdersResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewOrdersOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.FetchOrders(ctx, &pb.FetchOrdersRequest{
		UserId: userId,
		Page:   page,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}

func FetchOrder(userId int32, code string) *pb.FetchOrderResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewOrdersOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.FetchOrder(ctx, &pb.FetchOrderRequest{
		UserId: userId,
		Code:   code,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}

func CreateOrder(userId int32, items string) *pb.CreateOrderResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewOrdersOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.CreateOrder(ctx, &pb.CreateOrderRequest{
		UserId: userId,
		Items:  items,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}

func CancelOrder(userId int32, code string) *pb.CancelOrderResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewOrdersOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.CancelOrder(ctx, &pb.CancelOrderRequest{
		UserId: userId,
		Code:   code,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}
