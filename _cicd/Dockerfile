# build stage
FROM node:lts AS build-stage

ARG VUE_CONFIG_PRESET
ARG VUE_OTHER_SETTINGS
ARG BACKEND_API_URL

ENV VUE_APP_VUE_CONFIG_PRESET=${VUE_CONFIG_PRESET}
ENV VUE_APP_VUE_OTHER_SETTINGS=${VUE_OTHER_SETTINGS}
ENV VUE_APP_BACKEND_API_URL=${BACKEND_API_URL}


# add npm update
RUN node -v
RUN npm -v
RUN npm install -g npm@7.24.2
RUN npm -v

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# final image stage
FROM nginx:stable-alpine as production
COPY --from=build-stage /app/web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
