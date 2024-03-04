FROM node:alpine as builder
WORKDIR /portfolio
COPY ./ ./
RUN yarn install
RUN yarn build

FROM node:alpine
VOLUME /var/www/portfolio
RUN yarn global add serve
WORKDIR /portfolio
COPY --from=builder /portfolio/dist ./
CMD serve -s dist
