# docker-django-react
For more information: https://dev.to/englishcraig/creating-an-app-with-docker-compose-django-and-create-react-app-31lf

## Running the Docker Containers
```
docker-compose down # To close any containers, if openned
docker-compose up --build -d # Start containers, build and detach
```

## Adding npm Packages to frontend container
```
docker-compose run --rm frontend npm add (package_name)
docker-compose down 
docker-compose up --build -d 
```
