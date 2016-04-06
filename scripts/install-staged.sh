#!/usr/bin/env bash
set -ex

for package in ~/material2/deploy/*
do
  npm install ${package}
done
