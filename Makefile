install:
	npm install -g watchify coffee-script
	npm install

build:
	watchify -t coffeeify index.coffee -o index.js