#!/bin/bash

IMAGE_NAME="lucasg04/simple-docker-control"
IMAGE_VERSION="latest"

# Build the Docker image
docker build -t $IMAGE_NAME:$IMAGE_VERSION .

# Publish the Docker image
docker push $IMAGE_NAME:$IMAGE_VERSION