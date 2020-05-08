#!/bin/bash
# Thanks @vladsebian for this magical script 
# script to deploy to aws

# ports needed

access_key=""
secret_key=""

echo $access_key
echo $secret_key

# exit 0

docker-machine create                                               \
    --driver amazonec2                                              \
    --amazonec2-region eu-west-2                                    \
    --amazonec2-open-port 27017                                     \
    --amazonec2-access-key $access_key                              \
    --amazonec2-secret-key $secret_key                              \
    idp-1;

docker-machine create                                               \
    --driver amazonec2                                              \
    --amazonec2-region eu-west-2                                    \
    --amazonec2-open-port 27017                                     \
    --amazonec2-access-key $access_key                              \
    --amazonec2-secret-key $secret_key                              \
    idp-2;
