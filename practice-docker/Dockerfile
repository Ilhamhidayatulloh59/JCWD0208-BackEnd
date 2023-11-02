FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 2000

VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
