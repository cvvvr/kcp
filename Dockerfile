FROM node:16.13
WORKDIR /kcp
ADD . /kcp
RUN npm install
CMD node scripts/start.js