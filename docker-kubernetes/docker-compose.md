#### Docker Compose
Docker compose is used to start multiple containers at once and connect them with a network layer for they to be able to communicate with one another.
#### docker-compose.yaml
```yaml
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    build: .
    ports:
      - '4001:8081'
```

Here `services` refers the containers. for the `redis-server` service we specfied the image to be used to build the container. Similary for the `node-app` service we specified the `build` property referring to the current context where the `Dockerfile` is located. For the value of `ports` property the first port refers to the port on the local machine and the second port refers to the port inside the container. 

When we are configuring any client in our code we can specify the service name as the host so that when the docker-compose see this it will automatically redirect that request to the respective service container. Ex:
```js
redisClient.configure({
host:'redis-server'
})
```
#### To start the containers:
At the project root where the `docker-compose.yaml` file is located we have to run the following command
```bash
docker-compose up
```
To build/rebuild and run the containers we have to add the `--build` flag at the end of up command.
```bash
docker-compose up --build
```
