docker:
	        docker build . -t seanhellum && \
		docker run -p 8000:8000 seanhellum
.PHONY: docker

