FROM node:20-alpine3.17

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 5173

CMD ["yarn","dev"]