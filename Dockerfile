FROM node:12.18.3

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

EXPOSE 3333

CMD ["npm", "start"]