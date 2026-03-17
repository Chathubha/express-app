# Use Node base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY .env .env

# Expose application port
EXPOSE 5000

# Start application
CMD ["npm","start"]