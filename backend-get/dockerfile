FROM node:latest

WORKDIR /microservices

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "start"]