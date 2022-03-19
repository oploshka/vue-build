#!/usr/bin/env bash
set -Eeo pipefail

if [[ "$1" = 'app' ]]; then
    exec node "${APP_HOME}/src/server.js"
else
    exec "$@"
fi
