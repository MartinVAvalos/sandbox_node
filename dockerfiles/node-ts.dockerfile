FROM node:20

WORKDIR /app

RUN npm install -g ts-node typescript

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT ["ts-node"]
