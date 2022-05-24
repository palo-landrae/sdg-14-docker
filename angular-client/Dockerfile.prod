# Stage 1: Compile and Build angular codebase

# Use latest node image as the base image
FROM node:16-alpine as builder

# Set the working directory
WORKDIR '/app' 

# Install all the dependencies 
COPY ./package.json ./   
RUN npm install
RUN npm i -g @angular/cli@12

# Add the source code to app
COPY . .

# env
#ARG GITPOD_WORKSPACE_URL=${GITPOD_WORKSPACE_URL:-""}
#ENV NG_APP_GITPOD_WORKSPACE_URL=${GITPOD_WORKSPACE_URL}

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=builder /app/dist/angular-client /usr/share/nginx/html

# Expose port 80
EXPOSE 80
