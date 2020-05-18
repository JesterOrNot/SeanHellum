FROM node:12.16.3-stretch-slim
COPY . /app
WORKDIR /app
RUN apt-get update -qq \
    && apt-get install -yq \
        libglu1 \
        libxi6 \
        libgconf-2-4
RUN npm install -g gatsby
RUN npm install && gatsby build
EXPOSE 9000
CMD [ "gatsby", "serve" ]
