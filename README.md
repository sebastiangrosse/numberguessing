Simple command line game to try out docker with node.js

Build the docker image and run the container in interactive mode to start the game.

docker build . -t numberguessing
docker run -it --rm numberguessing
