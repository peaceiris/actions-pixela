FROM alpine:3.7

ENV PI_VERSION='v1.0.2'
ENV PI_NAME="pi_${PI_VERSION}_linux_amd64"

RUN apk add --no-cache --virtual .builddeps wget && \
    wget "https://github.com/a-know/pi/releases/download/${PI_VERSION}/${PI_NAME}.tar.gz" && \
    apk del --purge .builddeps
RUN tar -zxvf "${PI_NAME}.tar.gz" && \
    mv "${PI_NAME}/pi" /pi && \
    rm -rf "${PI_NAME}.tar.gz" "${PI_NAME}"

ENTRYPOINT [ "/pi" ]
