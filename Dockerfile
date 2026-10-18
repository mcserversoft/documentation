FROM oven/bun:1.3.11 AS bun
FROM node:24-bookworm-slim AS build
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
WORKDIR /app
COPY package.json bun.lock source.config.ts ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:stable-alpine AS deploy
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
