FROM node

WORKDIR /myapp
COPY . /myapp
COPY package*.json /myapp


EXPOSE  3000
RUN npm install 


CMD ["npm" ,"start"]