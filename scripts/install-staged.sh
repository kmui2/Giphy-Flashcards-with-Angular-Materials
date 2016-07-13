#!/usr/bin/env bash
set -ex

for package in ~/material2/deploy/* ; do
  if [ -f ${package}/package.json ]; then
    npm install ${package}
  fi
done
