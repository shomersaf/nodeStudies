FROM node:20-alpine3.17

WORKDIR /app2
COPY . .
COPY package*.json .



RUN npm install 


EXPOSE 3000
# CMD ["tail" ,"-f", "/dev/null"]
CMD ["npm" ,"start"]