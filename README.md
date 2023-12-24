# Shoppy

An eCommerce platform with all basic functionality (cart, inventory ..etc), the platform was built using a simple microservices architecture , consists of 2 services connected to each other using gRPC.

Technologies used in these project including : 

* Python3 (Django framework) for the admin panel and the database operation
* GoLang (Fiber framework) act as BFF , to handle user authentication and connect the admin panel using gRPC
* React.JS for the front side

## Installation

Before starting the installation process , please make sure that Python3 , Node.js(>=18) and GoLang(>=1.12) are all installed on your machine.

And make sure you are in the project folder , where you cloned / downloaded the project :

```
cd /path/to/project
```

For admin :

Usually Python3 apps , require a virtual environment to run , so we start by creating a new environment (To know more about the virtual environment , check please the [official docs](https://docs.python.org/3/library/venv.html)):

```
python3 -m venv .venv

source .venv/bin/activate
```
Then :

```
cd admin/

pip install -r requirements.txt 
```

For backend :

```
cd backend/

go mod tidy
```

For frontend :

```
cd frontend/

npm install
```

## Database Configuration

In order to connect to the database , you will need to copy the provided `.env.example` file and replace all the connection information with yours :

```
cd admin/shoppy_admin

cp .env.example .env
```

Then open the `.env` file in your editor and update it , these are the default database information (make sure to change them !):

```
DB_NAME='my_database_name'
DB_USER='my_username'
DB_PASSWORD='my_password'
DB_HOST='127.0.0.1'
DB_PORT='3306'
```
<br>

Finally this project was built using MySQL database , feel free to change it into whatever database of your choice. You can check the [Django docs](https://docs.djangoproject.com/en/5.0/ref/databases/) to know more about the supported databases.

## Backend Configuration

In order to start the backend 2 environment variables needed to be set , so first we copy the `.env.example` :

```
cd backend/

cp .env.example .env
```

Then we update the default values :

```
# Server Type
ENV="development" # or "production"

# JWT KEY
JWT_KEY="MY_SUPER_SECURE_KEY"
```

The `ENV` key , is responsible for controlling the hot-reload feature for the GoLang , which is necessary for development , but bad for production.

And the `JWT_KEY` is important for the authentication , to generate JWT token for the RESTful APIs , make sure to generate a super powerful 32 characters secret key :D

## Working with the Protobuf

In case you updated the gRPC features , you will need to re-generate the client/server code for GoLang and Python , to do so we need to install the necessary tools :

For Python : https://grpc.io/docs/languages/python/quickstart/
<br>
For GoLang : https://grpc.io/docs/languages/go/quickstart/

Then simply in your terminal , run the following commands :

1- For the admin panel (Python part) , we `cd` into the `admin` directory and then run the `grpc_tools` command : 

```
cd admin

python3 -m grpc_tools.protoc -I ../protos --python_out=./shoppy_admin/dashboard/api --pyi_out=./shoppy_admin/dashboard/api --grpc_python_out=./shoppy_admin/dashboard/api ../protos/{protobuf-name}.proto

```
<br>

2- For the backend (GoLang part) , we `cd` into the `backend` directory and then run the `protoc` command : 

```
cd backend

protoc -I ../protos --go_out=./shoppy_backend/api --go-grpc_out=./shoppy_backend/api --go_opt=paths=source_relative --go-grpc_opt=paths=source_relative ../protos/{protobuf-name}.proto

```
<br>

Please note in the commands above , `{protobuf-name}` , is the name of the service you want to update , like for example , if you added and a new function to the products service , you run these commands to update only the products service , other services , won't be affected.

And finally for the Python generated code you will need to update the module path in the generated server code , so if we are updating the products service , in the generated `products_pb2_grpc.py` file we update the following line :

```
From : 
import products_pb2 as products__pb2

To :
import dashboard.api.products_pb2 as products__pb2
```

## Running the application

In order to start the application , you will need to run 4 separated terminal instances , of course you can write a fancy script to do that , but i didn't actually to make it easier for debugging.

In each terminal we run the followwing :

For admin (web server) :

```
cd admin/shoppy_admin

python3 manage.py runserver
```

For admin (gRPC server) :

```
cd admin/shoppy_admin

python3 manage.py grpcrunserver
```

For backend :

```
cd backend/

go run main.go
```

For frontend :

```
cd frontend/

npm run start
```

The services will be running on the following ports , so make sure they are free and not used by other apps , or update them in the source code to whatever you like :

```
For admin : https://localhost:8000
For admin (gRPC) : https://localhost:50051
For backend : https://localhost:5000
For frontend : https://localhost:3000
```

Now you can access the application in your browser by typing https://localhost:3000 , And also access the admin panel by visiting : https://localhost:8000/admin


## Notes

Unfortunately the django-grpc-framework , currently has an issue with Django (version >=4) , [The issue](https://github.com/fengsp/django-grpc-framework/issues/42) is still not fixed , <ins>so you could use the solution in this [comment](https://github.com/fengsp/django-grpc-framework/issues/42#issuecomment-1545346306)</ins> , or just use another package as some users suggested [django-socio-grpc](https://django-socio-grpc.readthedocs.io/en/latest/).
