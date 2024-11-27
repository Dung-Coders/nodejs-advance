FROM node

WORKDIR /root/nodejs

COPY package.json .

RUN yarn config set network-timeout 3000000
RUN yarn install

COPY ./src/prisma ./src/prisma

RUN yarn prisma generate --schema ./src/prisma/schema.prisma
RUN yarn prisma generate --schema ./src/prisma/schema-mysql.prisma

COPY . .

RUN  yarn run build

CMD [ "yarn","start:prod" ]
# yarn build | yarn run build
# yarn run start:prod | yarn start:prod | node dist/main

# docker build . -t img-nest
# docker run -d -p 8080:8080 --name nest-container img-nest

# docker network create node-network
# docker run -d -p 8080:8080 --name nest-container --network node-network img-nest