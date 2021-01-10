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
