#!/usr/bin/env bash
set -e

DIR="$(realpath "$(dirname "${0}")")"
# Wait postgresql
timeout 25s "${DIR}/wait-for-postgres.js"

node "${DIR}/dist/index.js"

