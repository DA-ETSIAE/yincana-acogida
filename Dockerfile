FROM debian:latest

RUN apt update && apt install git -y
RUN apt install apache2 git -y

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]

EXPOSE 80

WORKDIR /var/www/html
VOLUME /var/log/apache2

ADD . /var/www/html
