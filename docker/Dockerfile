FROM node:18-alpine3.14 as build
WORKDIR /app/bot
COPY ./src ./src
COPY ./*.json ./
RUN ["npm", "install"]
RUN ["npx", "tsc"]
RUN rm -rf node_modules
RUN ["npm", "install", "--production"]

FROM node:18-alpine3.14
WORKDIR /usr/src/bot
RUN adduser -D -H bot bot
COPY --from=build --chown=bot:bot /app/bot/dist ./dist
COPY --from=build --chown=bot:bot /app/bot/package.json ./package.json
COPY --from=build --chown=bot:bot /app/bot/node_modules ./node_modules
USER bot
ENTRYPOINT [ "node", "/usr/src/bot/dist/index.js" ]
