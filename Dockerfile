FROM node:20-alpine AS builder

EXPOSE 3000

WORKDIR /app

RUN npm install i npm

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD npm run dev