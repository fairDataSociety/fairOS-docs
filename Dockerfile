#build
FROM node:lts as build

WORKDIR /base
COPY *.json ./
RUN npm install
COPY . .
RUN npm run set-base-url
RUN npm run build

#webserver
FROM nginx:stable-alpine
COPY --from=build /base/build /usr/share/nginx/html
RUN echo "real_ip_header X-Forwarded-For;" \
    "real_ip_recursive on;" \
    "set_real_ip_from 0.0.0.0/0;" > /etc/nginx/conf.d/ip.conf
RUN sed -i '/index  index.html index.htm/c\        try_files $uri /index.html;' /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
