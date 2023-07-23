run:
# docker run -d -p 80:4200 --env-file ./config/.env --rm --name logsapp shomersaf/minin:env
	docker run -d -p 3000:3000 -v logs:/app/data --name logsapp-minin minin:volumes 	
stop:	
	docker stop logsapp-minin 