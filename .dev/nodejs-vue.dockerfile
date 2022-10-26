FROM node:16-alpine

RUN npm i -g npm
RUN npm i -g @vue/cli
# RUN npm install @vue/cli@4.4.6 -g

# # create project
# vue create app-name
#

RUN apk update && apk add bash

WORKDIR "/var/www/html"
CMD ["/bin/bash"]
#CMD [ "npm", "run", "build" ]
