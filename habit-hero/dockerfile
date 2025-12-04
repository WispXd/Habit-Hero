# 1. Use Nginx server (lightweight, perfect for static websites)
FROM nginx:alpine

# 2. Remove default website
RUN rm -rf /usr/share/nginx/html/*

# 3. Copy your site into Nginx's web directory
COPY . /usr/share/nginx/html

# 4. Expose port 80 so we can access the website
EXPOSE 80
