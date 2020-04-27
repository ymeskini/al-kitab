FROM node:alpine AS builder
WORKDIR /app
 
COPY ./package.json .
COPY ./packages/api/package.json .
COPY ./yarn.lock .

RUN yarn install --production

COPY ./packages/api/public ./packages/api/public

WORKDIR ./packages/api
ENV NODE_ENV production
EXPOSE 4000

CMD ["node", "public/index.js"]