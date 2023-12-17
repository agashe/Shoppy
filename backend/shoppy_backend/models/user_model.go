package models

type User struct {
	Id       int32  `json:"id" validate:""`
	Name     string `json:"name" validate:"required"`
	Email    string `json:"email" validate:"required,email"`
	Address  string `json:"address" validate:"required"`
	Password string `json:"password" validate:""`
}
