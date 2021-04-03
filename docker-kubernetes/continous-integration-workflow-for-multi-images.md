### Flow
- Push Code To Github
- Travis automatically pulls repo
- Travis builds test image and test code
- travis builds prod images
- travis pushes build prod images to docker hub
- Travis pushes project to AWS EB
- EB pulls images from DOcker Hub, deploys

##### We need `.travis.yml` file which tells travis ci what to do with the repo
```yaml
sudo: required
language: generic

services:
  - docker

before_install:
  - docker build -t stephengrider/react-test -f ./client/Dockerfile.dev ./client

script:
  - docker run -e CI=true stephengrider/react-test npm test

after_success:
  - docker build -t stephengrider/multi-client ./client
  - docker build -t stephengrider/multi-nginx ./nginx
  - docker build -t stephengrider/multi-server ./server
  - docker build -t stephengrider/multi-worker ./worker
  # Log in to the docker CLI
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  # Take those images and push them to docker hub
  - docker push stephengrider/multi-client
  - docker push stephengrider/multi-nginx
  - docker push stephengrider/multi-server
  - docker push stephengrider/multi-worker
```
 
