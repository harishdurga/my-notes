## Why do we need docker?
To answer this question let's take the example of running a laravel application.

In order to run a laravel application on a given machine we need certain other things to be installed on the machine first. As the Laravel is a PHP framework we need PHP 7.X to be installed on the machine on which we are planning to run the laravel application. Apart from PHP 7.X we need other PHP extensions like mbstring,xml,json,mysql,curl etc. We need Composer software to install the dependency libraries for the Laravel application. So installing these things will be different based on the Operating system. It will be time taking process to do all these things again and again when ever we want to run this application on a new or different machine.

With Docker, we have to metion all these softwares and other setting in a `Dockerfile`. Once we are ready with dockerfile with one or a couple of commands our laravel application will be running. These commands will be same on any operating system.


### Docker Image And Docker Container:
A Dokcer image is a single file which contains all the dependencies and configurations to run a program. Image is simlar to a Class in OOP. Where as a container is a running instance of the class similar to an Object in OOP. There will be single image and many number of containers. Each container will be having it's own isolated set of resources (Filesystem, memory etc).


### Hello World
```sh
docker run hello-world
```
the `docker` keyword in the above command will invoke the docker client. Docker client will contact the Docker Daemon or Server. The docker server will check for the local version of the request image, in our case it is `hello-world`. The Dokcer Daemon will perform the following steps.
- The Docker client contacted the Docker daemon.
- The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
- The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
- The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.


### What Containers really are?
  #### Linux Namespaces:
  Linux namespaces comprise some of the fundamental technologies behind most modern-day container implementations. At a high level, they allow for isolation of global system resources between independent processes.For example, the PID namespace isolates the process ID number space. This means that two processes running on the same host can have the same PID! Ref: [https://medium.com/@teddyking/linux-namespaces-850489d3ccf](https://medium.com/@teddyking/linux-namespaces-850489d3ccf)
  
  So containers are independent processes with an allocated group of isolated processes. For example a container will be allocated file system, memory and metered access to physical resources via the control groups(cgroups).
  
