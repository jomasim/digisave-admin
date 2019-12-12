#!/bin/sh

echo "Installing depecencies"

yarn install

echo "Building app"
yarn run build
echo "Deployment complete"
