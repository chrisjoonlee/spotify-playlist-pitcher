FROM node:16.17.1-alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install
RUN npm cache clean --force

COPY . ./

CMD ["npm", "start"]