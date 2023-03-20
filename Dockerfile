FROM node:16
WORKDIR usr/src/useprod
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --only=prod