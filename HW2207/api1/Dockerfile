FROM node:20-alpine3.17

WORKDIR /app1
COPY . .
COPY package*.json .



RUN npm install 


EXPOSE 5000
# CMD ["tail" ,"-f", "/dev/null"]
CMD ["npm" ,"start"]