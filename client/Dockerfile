FROM node:17-alpine as build-stage
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
RUN pnpm i
COPY . .
RUN pnpm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]