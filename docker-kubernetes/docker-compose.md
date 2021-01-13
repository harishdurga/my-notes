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

Here `services` refers the containers. for the `redis-server` service we specfied the image to be used to build the container. Similary for the `node-app` service we specified the `build` property referring to the current context where the `Dockerfile` is located. 
