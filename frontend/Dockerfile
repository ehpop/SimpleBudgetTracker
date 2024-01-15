FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY src/ ./src/
COPY public/ ./public/
COPY package*.json ./
COPY tsconfig.json ./

ENV REACT_APP_API_BACKEND_URL="http://localhost:8080"
ENV REACT_APP_KEYCLOAK_BASE_URL="http://localhost:8443"

RUN npm install

# Build app
CMD [ "npm", "start" ]
