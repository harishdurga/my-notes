### Creating Production Grade Work Flow

#### Creating Dev Dockerfile:
For development purpose we will create a `Dockerfile.dev` file.
```bash
docker build -f Dockerfile.dev .
```
with the `-f` or `--file` flag we specifying the dockerfile to build the image. If we don't pass this flag then docker will look for `Dockerfile` by default withing the current context.
