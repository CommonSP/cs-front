FROM node:18.16.1-alpine AS build
WORKDIR /app

COPY ./ /app/
RUN npm install

RUN npm run build --prod

FROM nginx:latest AS ngi
COPY --from=build  /app/dist/cs-front /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80

