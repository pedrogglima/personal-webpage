FROM node:alpine

LABEL maintainer="pedrogglima"

RUN apk add \
  nasm make automake autoconf libtool dpkg pkgconfig libpng libpng-dev g++

WORKDIR /app 

COPY package.json .

RUN npm update 

RUN npm install 

COPY . .

CMD [ "npm", "run", "build" ]