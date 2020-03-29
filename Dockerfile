FROM node:13.12.0-alpine as builder
RUN apk add --update python alpine-sdk
WORKDIR /app
COPY package* tsconfig.json /app/
RUN npm ci
COPY public /app/public
COPY src /app/src
RUN npm run build

FROM nginx:1.17.9-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
