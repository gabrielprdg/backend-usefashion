FROM node:16
WORKDIR /usr/src/usefashionstore/backend
COPY ./package.json .
RUN npm install --only=prod