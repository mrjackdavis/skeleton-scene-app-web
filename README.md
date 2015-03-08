# skeleton-scene-app-web

## Deployment

This app is designed to be deployed as a static website. It is currently hosted on AWS S3 at http://skeleton-scene-app-web.s3-website-ap-southeast-2.amazonaws.com

To deploy, duplicate `./aws-example.json` to `./aws.json` and replace with your bucket and authentication credentials. Then run

    gulp deploy
