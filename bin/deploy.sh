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

###############
# Dev info.
###############
DEV_BUCKET=rsong-asset-management-ui.cramickit.ninja
DEV_REGION=eu-west-1
DEV_URL=https://rsong-asset-management-ui.cramickit.ninja
DEV_CF_ID=E3BN0IZWLUK7CX

###############
# QA info.
###############
QA_BUCKET=rsong-asset-management-ui-qa.cramickit.ninja
QA_REGION=eu-west-1
QA_URL=https://rsong-asset-management-ui-qa.cramickit.ninja
QA_CF_ID=E1764DTV55U12F

# Upload / Sync the dist folder to S3
function upload {
  echo "-----> Uploading to AWS"
  aws s3 sync build s3://${BUCKET}\
    --acl public-read\
    --region ${REGION}\
    $( if [ ! -z "${META}" ]; then echo "--metadata ${META}"; fi )
  echo "Build complete. Open in browser ${URL}"
}

function invalidate {
  echo "-----> Creating Cloudfront Invalidation"
  aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths '/*'
}

URL="N/A"

# Prompt the user for deployment options
# Build the app for production and upload it to Amazon S3
OPTIONS="dev qa"
clear
echo "Deploy to:"
select opt in ${OPTIONS}; do
  echo "-----> Building ${opt} dist"
  rm -rf dist; mkdir dist

  case $opt in
  "dev")
        CLOUDFRONT_ID=$DEV_CF_ID
        BUCKET=${DEV_BUCKET}
        REGION=${DEV_REGION}
        URL=${DEV_URL}
        rm -rfd build; npm install --no-progress --no-audit; npm run build-staging; upload; invalidate
    ;;
  "qa")
        CLOUDFRONT_ID=$QA_CF_ID
        BUCKET=${QA_BUCKET}
        REGION=${QA_REGION}
        URL=${QA_URL}
        rm -rfd build; npm install --no-progress --no-audit; npm run build-qa; upload; invalidate
    ;;
  esac
  exit
done