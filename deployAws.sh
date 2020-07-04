#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
rm -rf ./dist/.git/

aws s3 rm s3://spacestationidle.com/ --recursive
aws s3 cp ./dist/ s3://spacestationidle.com/ --recursive

aws cloudfront create-invalidation --distribution-id E1TJXY6E8IPGCI --paths "/*"