#!/bin/bash

# Run api-gateway
cd api-gateway/
npm run dev &

# Run auth-service
cd ../auth-service/
npm run dev &

# Run user-service
cd ../user-service/
npm run dev &

# Run course-service
cd ../course-service/
npm run dev &

# Run notification-service
cd ../notification-service/
npm run dev &

# Run payment-service
cd ../payment-service/
npm run dev &

# Run chat-service
cd ../chat-service/
npm run dev &

wait
