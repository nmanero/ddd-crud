.PHONY: help
help:
	@echo "make help        Show this help message"
	@echo "make init        Initialize repository. This command install git hooks locally."
	@echo "make dev         Run the app's development environment"
	@echo "make docker      Make the app's Docker image"
	@echo "make run-docker  Run the app's Docker image locally."
	@echo "make test  		Run tests"
	@echo "                 This command exists for conveniently testing the Docker image locally."

.PHONY: init
init: githooks

githooks:
	@rm -rf .git/hooks
	@ln -s ../docs/hooks .git/hooks
	@chmod -R +x .git/hooks/*

.PHONY: dev
dev: build
	@npm run dev

build: node_modules
	@npm install

node_modules: package.json

.PHONY: docker
docker:
	@git archive --format=tar.gz HEAD | docker build -t cuatroochenta.com/ddd-crud:$(DOCKER_TAG) -

.PHONY: run-docker
run-docker:
	@docker run -it --rm \
		-p 3000:3000 \
		cuatroochenta.com/ddd-crud:$(DOCKER_TAG)

DOCKER_TAG = latest

.PHONE: test
test:
	@npm test
