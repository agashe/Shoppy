package models

type Message struct {
	Name  string `json:"name" validate:"required,max=200"`
	Email string `json:"email" validate:"required,email,max=200"`
	Body  string `json:"body" validate:"required"`
}
