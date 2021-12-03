FROM node:17-alpine as build-stage
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
RUN pnpm i
COPY . .
RUN pnpm run build

FROM joseluisq/static-web-server:2 as production-stage
COPY --from=build-stage /app/dist /public
EXPOSE 80
# CMD ["static-web-server"]
ENTRYPOINT ["static-web-server"]