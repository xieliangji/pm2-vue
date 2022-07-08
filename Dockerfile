FROM node:latest
ENV APP_PATH=/home/app
RUN npm install -g pm2
#把代码库挂在到/home/app/pm2-vue
EXPOSE 5000