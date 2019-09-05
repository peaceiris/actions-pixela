FROM alpine:3.9

ENV PI_VERSION='v1.1.0'
ENV PI_NAME="pi_${PI_VERSION}_linux_amd64"
ENV PI_URL="https://github.com/a-know/pi/releases/download/${PI_VERSION}/${PI_NAME}.tar.gz"

RUN apk update && apk add --no-cache ca-certificates
RUN wget "${PI_URL}" && \
    tar -zxvf "${PI_NAME}.tar.gz" && \
    mv "${PI_NAME}/pi" /usr/local/bin/pi && \
    rm -rf "${PI_NAME}.tar.gz" "${PI_NAME}"

ENTRYPOINT ["/usr/local/bin/pi"]
