package models

type Message struct {
	Name  string `json:"name" validate:"required"`
	Email string `json:"email" validate:"required,email"`
	Body  string `json:"body" validate:"required"`
}
