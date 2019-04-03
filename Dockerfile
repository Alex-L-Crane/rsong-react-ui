FROM node:11.13 as builder
RUN mkdir /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app/

RUN npm install
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.15-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
#COPY config/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
