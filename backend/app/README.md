copy past .env to .env.local and complete or update key like APP_SECRET
to generate an APP_SECRET random number: openssl rand -hex 32

to generate config/jwt token (don't forget to create jwt folder before):
openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout
after that just write in your .env.local 
JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem
JWT_PUBLIC_KEY=
JWT_PASSPHRASE=your password you write when you created the private.pem

or write your JWT keys env before and launch this command:
php bin/console lexik:jwt:generate-keypair