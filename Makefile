NODE_JS_CONTAINER_NAME="nodejs-vue"

serv-start:
	cd "./.dev" && docker-compose up -d

serv-stop:
	cd "./.dev" && docker-compose down


node-version:
	docker exec $(NODE_JS_CONTAINER_NAME) node -v

npm-version:
	docker exec $(NODE_JS_CONTAINER_NAME) npm -v

npm-i:
	docker exec $(NODE_JS_CONTAINER_NAME) npm -i

npm-serve:
	docker exec $(NODE_JS_CONTAINER_NAME) npm run serve

terminal:
	docker exec -it $(NODE_JS_CONTAINER_NAME) bash

#test:
#	go test $$(go list ./... | grep -v /restapi/)
#
##for CI/CD ("clean cache")
#test-all:
#	go clean -testcache && go test $$(go list ./... | grep -v /restapi/)
#
#test-i:
#	if [ ! -x ./test-integration-old.sh ] ; then \
#		chmod +x ./test-integration-old.sh ; \
#	fi ; \
#	./test-integration-old.sh
#
#swagger-validate:
#	if [ ! -x ./swagger-validate.sh ] ; then \
#		chmod +x ./swagger-validate.sh ; \
#	fi ; \
#	./swagger-validate.sh
#
#swagger-flatten:
#	if [ ! -x ./swagger-flatten.sh ] ; then \
#		chmod +x ./swagger-flatten.sh ; \
#	fi ; \
#	./swagger-flatten.sh
#
#db_start:
#	docker run --name $(DB_CONTAINER_NAME) -e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) -e POSTGRES_DB=$(POSTGRES_DB) -d -p $(POSTGRES_PORT):5432 --rm postgres:13
#
#db_stop:
#	docker stop $(DB_CONTAINER_NAME)
#
#start_docker:
#	docker build -t $(DOCKER_IMAGE_NAME) .
#
#	MSRV_DB_USER=$(POSTGRES_USER) MSRV_DB_PASS=$(POSTGRES_PASSWORD) MSRV_DB_NAME=$(POSTGRES_DB) \
#		docker run --rm -it -e MSRV_DB_USER -e MSRV_DB_PASS -e MSRV_DB_NAME --network=host $(DOCKER_IMAGE_NAME)
