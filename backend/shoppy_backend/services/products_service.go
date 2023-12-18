package services

import (
	"context"
	"log"
	pb "shoppy_backend/shoppy_backend/api"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func FetchProducts(categoryId int32, searchKeyword string, page int32) *pb.FetchProductsResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewProductOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.FetchProducts(ctx, &pb.FetchProductsRequest{
		CategoryId:    categoryId,
		SearchKeyword: searchKeyword,
		Page:          page,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}

func FetchProduct(id int32) *pb.FetchProductResponse {
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()

	client := pb.NewProductOperationsClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	response, err := client.FetchProduct(ctx, &pb.FetchProductRequest{
		Id: id,
	})

	if err != nil {
		log.Fatalf("could not fetch: %v", err)
	}

	return response
}
