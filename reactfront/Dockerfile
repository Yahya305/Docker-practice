# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

# Install dependencies for development and production
COPY package*.json ./
RUN npm install

# Install curl
RUN apk add --no-cache curl

# Copy all project files
COPY . .

# Build the production-ready app
RUN npm install

# Expose port 5173
EXPOSE 3000

# Start the Vite server in production mode (assuming a suitable script exists)
CMD ["npm", "start"]

