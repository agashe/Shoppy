package models

type Credentials struct {
	Email    string `json:"email" validate:"required,email,max=200"`
	Password string `json:"password" validate:"required"`
}
