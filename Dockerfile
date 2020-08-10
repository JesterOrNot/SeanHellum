FROM ekidd/rust-musl-builder:latest AS builder
COPY . /app
WORKDIR /app
RUN sudo chown -R rust:rust /app
RUN /bin/bash -c "rustup toolchain install nightly \
    && rustup target add x86_64-unknown-linux-musl --toolchain nightly \
    && cargo +nightly build --release --target x86_64-unknown-linux-musl"

FROM scratch
COPY --from=builder /app/target/x86_64-unknown-linux-musl/release/SeanHellum /app
CMD [ "/app" ]
