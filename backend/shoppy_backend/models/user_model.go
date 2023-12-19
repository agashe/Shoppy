package models

type User struct {
	Id       int32  `json:"id" validate:""`
	Name     string `json:"name" validate:"required,max=200"`
	Email    string `json:"email" validate:"required,email,max=200"`
	Address  string `json:"address" validate:"required,max=300"`
	Password string `json:"password" validate:"omitempty,min=8,eqfield=Confirm"`
	Confirm  string `json:"confirm" validate:"omitempty,min=8"`
	Current  string `json:"current" validate:""`
}
