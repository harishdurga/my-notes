#### Docker Compose
Docker compose is used to start multiple containers at once and connect them with a network layer for they to be able to communicate with one another.
#### docker-compose.yaml
```yaml
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart:always
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
When we run the up command, the docker-compose first creates a network and then it build and runs the containers.
the `-d` or `--detach` flag with the command will run the containers in the background.
```bash
docker-compose up -d
```


#### To stop the containers:
```bash
docker-compose down
```
by running this command it will stop and removes the containers and also the network.

#### Automatic container restarts:
To restart container with docker-compose we have 4 different restart policies.
- *"no"* : never attempt to restart the container if it stops or crashes. Double needs to be there. Because in an yaml file no refers to false.
- *always* : if the conatiner stop always restart the conatainer
- *on-failure* : only restart if the conatiner stopped with an error code
- *unless-stopped* : always restart unless we forcibly stop it

