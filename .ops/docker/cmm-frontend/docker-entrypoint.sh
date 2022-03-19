#!/usr/bin/env bash
set -Eeo pipefail

if [[ "$1" = 'app' ]]; then
    exec nginx -g "daemon off;" -c "${NGINX_CONF_HOME}/nginx.conf"
else
    exec "$@"
fi
