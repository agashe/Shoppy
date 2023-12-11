package models

type CartItem struct {
	Id       string `json:"id" validate:"required"`
	Quantity string `json:"quantity" validate:"required,gte=1"`
}

type CartItemForDelete struct {
	Id string `json:"id" validate:"required"`
}
