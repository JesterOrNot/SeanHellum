FROM gitpod/workspace-full

RUN bash -cl "rustup install nightly && cargo default nightly"