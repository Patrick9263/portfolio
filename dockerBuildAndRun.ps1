# docker stop "react-app-nginx"
# docker stop "api"
docker stop "portfolio"

docker build -t "react-app-nginx" ./client
docker build -t "api" ./api

docker-compose up
