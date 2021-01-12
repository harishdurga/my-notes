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
