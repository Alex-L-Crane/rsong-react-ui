#!/bin/bash -ei
# RSong Asset Management UI script. This script will:
# - run the build over local files
# - upload the prepared assets to Amazon S3

shopt -s expand_aliases

forceCleanWorkingTree=true

if [ -z ${AWS_ACCESS_KEY_ID+x} ] || [ -z ${AWS_SECRET_ACCESS_KEY+x} ]; then
  echo "You must have AWS deployment credentials to continue: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY env varss."
  exit 1
fi

# Dev info.
DEV_BUCKET=rsong-asset-management-ui.cramickit.ninja
DEV_REGION=eu-west-1
DEV_URL=http://rsong-asset-management-ui.cramickit.ninja

# Upload / Sync the dist folder to S3
function upload {
  echo "-----> Uploading to AWS"
  aws s3 sync build s3://${BUCKET}\
    --acl public-read\
    --region ${REGION}\
    $( if [ ! -z "${META}" ]; then echo "--metadata ${META}"; fi )
  echo "Build complete. Open in browser ${URL}"
}


BUCKET=${DEV_BUCKET}
REGION=${DEV_REGION}
URL=${DEV_URL}
npm install --no-progress --no-audit; npm run build-staging; upload

