FROM node:18 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build
FROM nginx
RUN apt-get update
COPY --from=build /usr/local/app/dist/anti_fake_call_client/browser /home
COPY ./proxy_default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
