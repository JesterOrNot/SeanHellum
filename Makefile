format:
	prettier --write static/**/*.js static/**/*.css templates/**/*.html
.PHONY: format
deps:
	pip3 install -r requirements.txt
	npm install -g prettier
.PHONY: deps