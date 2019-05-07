FROM alpine:3.7

LABEL "com.github.actions.name"="Pixela increment"
LABEL "com.github.actions.description"="GitHub Actions for Pixela (a-know/pi)"
LABEL "com.github.actions.icon"="activity"
LABEL "com.github.actions.color"="green"

LABEL "repository"="https://github.com/peaceiris/actions-pixela"
LABEL "homepage"="https://github.com/peaceiris/actions-pixela"
LABEL "maintainer"="peaceiris"

ENV PI_VERSION='v1.0.2'
ENV PI_NAME="pi_${PI_VERSION}_linux_amd64"
ENV PI_URL="https://github.com/a-know/pi/releases/download/${PI_VERSION}/${PI_NAME}.tar.gz"

RUN apk update && apk add --no-cache ca-certificates
RUN wget "${PI_URL}" && \
    tar -zxvf "${PI_NAME}.tar.gz" && \
    mv "${PI_NAME}/pi" /usr/local/bin/pi && \
    rm -rf "${PI_NAME}.tar.gz" "${PI_NAME}"

ENTRYPOINT ["/usr/local/bin/pi"]
