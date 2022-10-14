FROM node:18 AS build-stage
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:18 AS production-stage
WORKDIR /app

COPY --from=build-stage /app/package.json .
COPY --from=build-stage /app/dist/ .

RUN yarn install --production --frozen-lockfile

EXPOSE 3000
CMD [ "node", "index.js" ]