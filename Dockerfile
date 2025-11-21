# Use the official Node.js 18 image as the base image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install app dependencies
RUN npm install --production
RUN npm install -D tailwindcss postcss autoprefixer

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Set environment variable for Next.js production
ENV NODE_ENV=production

# Expose port 8080 for Google Cloud Run
EXPOSE 8080

# Start the Next.js app on port 8080
CMD ["npm", "start"]
