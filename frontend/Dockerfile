FROM node:20.10-alpine3.19 as runner

WORKDIR /run-space
COPY . ./
RUN npm i
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
