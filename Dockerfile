FROM node:18-alpine

WORKDIR /app/gatsby-landing
COPY . .
#RUN npm install @lmdb/lmdb-win32-x64
RUN npm install -g gatsby-cli

CMD [ "npm", "start" ]

EXPOSE 8000


