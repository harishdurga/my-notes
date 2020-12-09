
#### Overriding the default command
```bash
docker run busybox echo hello world
```
#### List Running Containers
```bash
docker ps
```
the `--all` flag will list out all the containers that are ever run on the computer

#### Container Life Cycle
`docker run <image> = docker create <image>+ docker start <image>`
the `-a` or `--attach` flag in the `docker start <image id> -a` command will Attach STDOUT/STDERR and forward signals from the conatiner to the terminal of the host.

Once a container run with a default command, the default command cannot be replaced.
Ex:
`docker run busybox echo hi there` then the following command won't work. `docker start <conatiner id> echo hello world`

#### Deleting Stopped Containers
`docker system prune` this will delete all stopped containers along with build cache.

#### Retrieving Log Outputs
`docker logs <container id>`

#### Stopping Containers
**Stop**: `docker stop <container id>` will send a `SIGTERM` signal to the container. There will be a grace period of 10 seconds which means the system will wait 10 seconds for the process to complete it's work. If the process is not able to complete the work withing the grace period then the system sends `SIGKILL` kill signal to the container to kill the process instantly.
**Kill**: `docker kill <container id>`.Kill the running process instantly and stop the container.

#### Executing An Additional Command inside container
```bash
docker exec -it <container id> <command>
```
`-i` or `--interactive` is to Keep STDIN open even if not attached and the `-t` or `--tty` to Allocate a pseudo-TTY so that the output from the container will be formatted when being presented in the host terminal.

#### Starting A Shell
```bash
docker exec -it <container id> sh
```
and 
```bash
docker run <image> sh
```
