# Base stage
FROM php:8.2-fpm AS php_base

RUN apt update \
    && apt install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip postgresql-server-dev-all\
    && docker-php-ext-install intl opcache pdo pdo_pgsql \
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip

WORKDIR /var/www/symfony_docker

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | bash
RUN apt install symfony-cli

RUN git config --global user.email "inconnu259@gmail.com" \
    && git config --global user.name "inconnu259"
# COPY app/composer.json app/composer.lock ./

# Development stage
FROM php_base AS php_dev

# COPY app/ .
# RUN composer install
# CMD ["bash", "-c", "php bin/console doctrine:database:create && php bin/console doctrine:schema:update --force && php bin/console doctrine:fixtures:load -n && php-fpm"]

# Production stage
FROM php_base AS php_prod

# Install all dependencies with Composer
RUN composer install --no-dev --optimize-autoloader
# todo add migration
CMD ["bash", "-c", "php bin/console doctrine:database:create && php-fpm"]