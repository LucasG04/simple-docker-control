#!/bin/bash

IMAGE_NAME="lucasg04/simple-docker-control"
IMAGE_VERSION="$1"

if [ -z "$IMAGE_VERSION" ]; then
    echo "Please provide a version for the image"
    exit 1
fi

# Build the Docker image
docker build -t $IMAGE_NAME:$IMAGE_VERSION .

# Publish the Docker image
docker push $IMAGE_NAME:$IMAGE_VERSION