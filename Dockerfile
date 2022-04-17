FROM node:latest as builder

WORKDIR /app

COPY . ./

RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html/

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/public /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
