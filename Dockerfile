FROM node16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm Install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]