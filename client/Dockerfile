FROM node:17-alpine as build-stage
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
RUN pnpm i
COPY . .
RUN pnpm run build

FROM nginx:latest as production-stage
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]