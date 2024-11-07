FROM node:latest

WORKDIR /app

RUN npm install -g ts-node typescript npm

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT ["ts-node"]
