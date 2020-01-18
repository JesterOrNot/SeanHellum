format: deps
	prettier --write static/**/*.js static/**/*.css templates/**
.PHONY: format
deps:
	pip3 install -r requirements.txt
	npm install -g prettier
	npm install
.PHONY: deps