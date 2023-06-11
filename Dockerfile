# Specify the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the server files to the container
COPY index.js .

# Expose the port that the server will listen on
EXPOSE 3000

# Start the server
CMD ["node", "index.js"]
