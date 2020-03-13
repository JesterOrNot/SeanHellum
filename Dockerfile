FROM rust:slim-stretch
COPY . /app
WORKDIR /app
RUN /usr/local/cargo/bin/rustup install nightly
RUN cargo +nightly build
EXPOSE 8000
CMD [ "target/debug/SeanHellum" ]
