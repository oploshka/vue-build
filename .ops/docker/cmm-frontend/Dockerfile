ARG APP_HOME="/usr/share/nginx/html"
ARG NGINX_CONF_HOME="/usr/share/nginx/conf"


FROM node:16-alpine as dependency-image

WORKDIR /build

RUN npm install -g npm
COPY ./package-lock.json ./package.json ./
RUN npm ci


FROM dependency-image as compile-image

WORKDIR /build

COPY ./public  ./public
COPY ./resource  ./resource
COPY ./src  ./src
COPY ./test  ./test
COPY \
    ./.browserslistrc \
    ./.env \
    ./.eslintignore \
    ./.eslintrc.js \
    ./.gitignore \
    ./babel.config.js \
    ./cypress.json \
    ./jest.config.js \
    ./vue.alias.js \
    ./vue.config.devserver.js \
    ./vue.config.js \
    ./webpack.alias.js \
    ./
RUN npm run build


FROM nginx:1.16-alpine as runtime-image
ARG APP_HOME
ARG NGINX_CONF_HOME

ENV APP_HOME=${APP_HOME}
ENV NGINX_CONF_HOME=${NGINX_CONF_HOME}

RUN apk add --update --no-cache bash curl

COPY --from=compile-image /build/web/ ${APP_HOME}
RUN chown nginx:nginx -R ${APP_HOME}

COPY ./.ops/nginx/nginx.conf ${NGINX_CONF_HOME}/nginx.conf
RUN chown nginx:nginx -R ${NGINX_CONF_HOME}

COPY ./.ops/docker/cmm-frontend/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh && \
    ln -s /usr/local/bin/docker-entrypoint.sh /

WORKDIR ${APP_HOME}
EXPOSE 8080

STOPSIGNAL SIGQUIT

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD [ "app" ]