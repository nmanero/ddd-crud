.PHONY: help
help:
	@echo "make help              Show this help message"
	@echo "make docker            Make the app's Docker image"
	@echo "make run-docker        Run the app's Docker image locally. "
	@echo "                       This command exists for conveniently testing "
	@echo "                       the Docker image locally. "

.PHONY: docker
docker:
	@git archive --format=tar.gz HEAD | docker build -t cuatroochenta.com/ddd-crud:$(DOCKER_TAG) -

.PHONY: run-docker
run-docker:
	@docker run -it --rm \
		-p 3000:3000 \
		cuatroochenta.com/ddd-crud:$(DOCKER_TAG)

DOCKER_TAG = latest