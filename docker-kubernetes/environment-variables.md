#### Environment Variables

In a docker compose file to specify the environment variables:
```yaml
version: "3"
services:
  postgres:
    image: "postgres:latest"
    environment:
      - POSTGRES_PASSWORD=Abcd@1234
  redis:
    image: "redis:latest"
  server:
    build:
      dockerfile: Dockerfile.dev
      context: ./server
    volumes:
      - /app/node_modules
      - ./server:/app
    environment:
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - PGUSER=postgres
      - PGHOST=postgres
      - PGDATABASE=postgres
      - PGPASSWORD=postgres_password
      - PGPORT=5432
```
These values specified in the `environment` section will be set during the run time of the containes.
