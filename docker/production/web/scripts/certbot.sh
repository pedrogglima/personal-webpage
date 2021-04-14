certbot certonly \
	--webroot -w /etc/nginx/app/public \
	-d "pedrogglima.com.br" \
	-d "www.pedrogglima.com.br" \
	--email "pedrogglima@gmail.com" \
	--rsa-key-size 4096 \
	--agree-tos \
	--expand \
	--noninteractive \
	--debug-challenges \
	$OPTIONS || true

if [[ -f "/etc/letsencrypt/live/pedrogglima.com.br/privkey.pem" ]]; then
    cp "/etc/letsencrypt/live/pedrogglima.com.br/privkey.pem" /usr/share/nginx/certificates/privkey.pem
		cp "/etc/letsencrypt/live/pedrogglima.com.br/fullchain.pem" /usr/share/nginx/certificates/fullchain.pem
fi