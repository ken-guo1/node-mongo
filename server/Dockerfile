FROM node:12.18.1

WORKDIR /usr/src/app

COPY package*.json ./

ENV MONGO_URL=mongodb://mongo:27017/example


RUN npm install

COPY . .

CMD [ "npm", "start"]