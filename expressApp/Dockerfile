# Use a lightweight Node.js base image
FROM node:18-alpine

# Create a working directory within the container
WORKDIR /app

VOLUME [ "/app/logs" ]

# Copy the rest of your app's files
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app will listen on
EXPOSE 8000

# Start the app using npm
CMD ["npm", "run", "dev"]
