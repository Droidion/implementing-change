FROM node:17-alpine as build-stage
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
RUN pnpm i
COPY . .
RUN pnpm run build

FROM node:17-alpine as production-stage
RUN npm install -g http-server
WORKDIR /public
COPY --from=build-stage /app/dist .
EXPOSE 8080
CMD ["http-server", "-b", "-g"]