#### Copy Local Files To Container
```dockerfile
COPY ./ ./
```
the first argument to the `COPY` command is relative to the build context means where the current `Dockerfile` is located.

#### Port Mapping
Port mapping is a run time setting. Means it will be applied whenever we run a container out of an image.
```bash
docker run -p <port for incoming request to localhost>:<port inside the container> <image id> 
```
Example:
```bash
docker run -p 8080:8080 harishdurga/my-image:latest
```
#### Working Directory
When we want to copy files into a specific folder inside the container but not the root directory of the container.
```dockerfile
WORKDIR /usr/app
```
after this all the following commands will be excuted within the working directory.
So the `COPY` command will copy the files of project to the /usr/app directory inside the container. 
