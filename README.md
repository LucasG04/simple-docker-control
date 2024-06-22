# simple-docker-control

## Usage

Deploy via `docker compose`:

```yaml
version: "3.8"

services:
  docker-control:
    container_name: docker-control
    image: lucasg04/simple-docker-control
    restart: unless-stopped
    ports:
      - 3000:3000
    environment:
      - CONTAINER_NAME=mycontainer
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```
