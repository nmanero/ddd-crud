FROM node:15.11.0-alpine3.10

RUN mkdir -p /home/node/app && chown node:node /home/node/app

USER node

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
COPY tsconfig.json ./

COPY --chown=node:node . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]
