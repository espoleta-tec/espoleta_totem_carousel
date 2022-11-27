FROM node:16-alpine
WORKDIR /api/src
COPY package.json package.json
RUN yarn
COPY . .
RUN yarn build
CMD ["yarn", "strapi start"]
