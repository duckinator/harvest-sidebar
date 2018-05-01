all: build/harvest-sidebar.zip

build/harvest-sidebar.zip:
	mkdir -p build/
	zip -r build/harvest-sidebar.zip sidebar.js manifest.json

clean:
	rm -f build/*.zip

.PHONY: all clean
