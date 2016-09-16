#!/usr/bin/env bash
set -ex

rm -rf ./node_modules/@angular2-material
cp -r ~/material2/dist/@angular2-material/ ./node_modules
