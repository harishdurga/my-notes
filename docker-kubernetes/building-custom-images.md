## Building Custom Images

#### Redis Image Dockerfile
```dockerfile
#Use an existing docker image as base
FROM alpine
#Install any dependency
RUN apk add --update redis
#Telling image what to do when it starts as a container
CMD ["redis-server"]

```
#### What is a base image?
A base image is like an OS which gives features like filesystem and other tools that help to install other softwares.

#### Tagging an Image:
The `-t` flag is used to tag an image so that we can use the tagged name of the image instead of using the id that got generated during the build process.
The naming convention is <docker id>/<image name>:<version>
Ex:
  ```bash
  docker build -t harish/laravel:latest .
  ```
