FROM node:18

RUN apt-get update && apt-get install -y \
    ffmpeg

COPY . /app

WORKDIR /app  

RUN npm install -g husky
RUN npm install

EXPOSE 3000 5000

CMD node index.js
