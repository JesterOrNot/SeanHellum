FROM gitpod/workspace-full

USER gitpod

RUN bash -cl "rustup install nightly && rustup default nightly"

RUN sudo apt-get update \
    && sudo apt-get install -y heroku
