# Настроить базовое изображение
FROM nginx

 # Копируем содержимое файла dist в /usr/share/nginx/html/  В этом каталоге
#COPY dist/  /usr/share/nginx/html/
#COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'echo init ok!!'