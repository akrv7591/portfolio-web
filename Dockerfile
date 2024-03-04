FROM node:alpine as builder
WORKDIR /portfolio
COPY ./ ./
RUN yarn install
RUN yarn build
RUN yarn global add serve
CMD serve -s dist -p 3000

#FROM node:alpine
#VOLUME /var/www/portfolio
#EXPOSE 3000
#RUN yarn global add serve
#WORKDIR /portfolio
#COPY --from=builder /portfolio/dist ./
#CMD serve -s dist -p 3000
