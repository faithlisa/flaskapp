# Step 1: Build the React application
# Use a node image to build the application
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN npm run build

# Step 2: Serve the app using a slim image
# Use nginx:alpine for a small, efficient base image
FROM nginx:alpine

# Copy static assets from builder stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
