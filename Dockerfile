FROM node:7-alpine

WORKDIR /opt/app

COPY package.json /opt/app
RUN npm install

COPY . /opt/app

CMD ["npm", "start"]
