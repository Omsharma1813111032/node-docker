# installing node js
FROM node:23

# working directory
WORKDIR /app

# copying the packagefile and install dependencies
COPY package*.json ./
RUN npm install

# installing the nodemone 
RUN npm i -g nodemon

# Copying all source code
COPY . .

#exposing port
EXPOSE 3000


CMD ["nodemon", "--legacy-watch", "server.js"]