### Creating Production Grade Work Flow

#### Creating Dev Dockerfile:
For development purpose we will create a `Dockerfile.dev` file.
```bash
docker build -f Dockerfile.dev .
```
with the `-f` or `--file` flag we specifying the dockerfile to build the image. If we don't pass this flag then docker will look for `Dockerfile` by default withing the current context.

#### Docker Volumes:
In a development environment when ever we make somechanges to our source code we have rebuild the image to reflect the changes. To avoid these rebuilds instead of copying file system snapshot of the project into the container, we reference folders.
```bash
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image id>
```
With `-v $(pwd):/app` we are saying map the present working directory into the `/app` directory inside the container
With `-v /app/node_modules` we are saying don't map these folders to the pwd folders instead use the node_modules folders inside the container only.

#### Using Docker Compose To Simplify the above command:
```yaml
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev 
    ports:
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app  
```
Here for the `build` property we specified `context` and `dockerfile` instead of a `.` because we have a `Dockerfile.dev` and not the default one.

#### Docker Attach:
```bash
docker attach <container id>
```
this will attach our terminal to the std in, out and err of the container specified with id in the command. This will be attached to the standard in of the primary process inside the conatiner. so if we run the `npm run test` then the `npm` will be the primary process in the conatiner.

#### Multistep Docker Builds:
So in a multistep build process, the result of first step will be used in the second build step. In this process we have two phases. `Build phase` and `run phase`. 

