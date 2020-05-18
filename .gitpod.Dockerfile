FROM gitpod/workspace-full

# Gitpod best practice
USER gitpod

# One of gatsby's dependencies needs these to prevent it
# compiling from source code
RUN sudo apt-get update -qq \
    && sudo apt-get install -yq \
        libglu1 \
        libxi6 \
        libgconf-2-4

# Get Heroku CLI
RUN curl "https://cli-assets.heroku.com/install-ubuntu.sh" | sudo sh

# Install the prettier and gatsby CLIs
RUN npm i -g prettier gatsby-cli
