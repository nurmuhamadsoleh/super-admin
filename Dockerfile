# This file is a template, and might need editing before it works on your project.
FROM node:14

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package*.json ./
RUN yarn install

COPY . .

# replace this with your application's default port
EXPOSE 3000
CMD [ "yarn", "start" ]
