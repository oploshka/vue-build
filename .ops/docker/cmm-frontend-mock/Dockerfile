ARG APP_HOME="/app"


FROM node:16-alpine as dependency-image

WORKDIR /build

RUN npm install -g npm
COPY ./testServer/package-lock.json ./testServer/package.json ./
RUN npm ci


FROM node:16-alpine as runtime-image
ARG APP_HOME
ENV APP_HOME=${APP_HOME}

WORKDIR ${APP_HOME}

RUN apk add --update --no-cache bash curl

COPY --from=dependency-image /build/node_modules ./node_modules
COPY ./testServer/src ./src
COPY \
    ./testServer/.gitignore \
    ./testServer/package-lock.json \
    ./testServer/package.json \
    ./

COPY ./.ops/docker/cmm-frontend-mock/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh && \
    ln -s /usr/local/bin/docker-entrypoint.sh /

WORKDIR ${APP_HOME}
EXPOSE 8080

STOPSIGNAL SIGQUIT

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD [ "app" ]