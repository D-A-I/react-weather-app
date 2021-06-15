# version
ARG VARIANT=15.13-buster-slim

# image
FROM node:${VARIANT}

# setup
RUN apt-get update && apt-get install -y \
  emacs \
  curl \
  git \
  # 日本語化
  locales \
  && localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8 \
  && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && echo Asia/Tokyo > /etc/timezone \
  # delete cache
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

ENV LANG ja_JP.UTF-8

# dotfiles
COPY --chown=node:node .devcontainer/dotfiles/.emacs.d/init.el /home/node/.emacs.d/init.el

USER node
