FROM node:16-alpine
WORKDIR /opt/front
COPY package.json package.json
RUN yarn
COPY . .
ARG API_BASE_URL
ENV API_BASE_URL ${API_BASE_URL}
RUN yarn build
RUN echo $API_BASE_URL
CMD ["npx", "nuxi", "start"]
