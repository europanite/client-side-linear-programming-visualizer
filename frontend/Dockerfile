FROM node:22-bullseye

WORKDIR /app

# React Native DevTools bundles a Chromium-based shell. Even for an Expo Web
# development container, Expo may install/probe it at startup, so the runtime
# libraries below must exist in the image.
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
      ca-certificates \
      libasound2 \
      libatk-bridge2.0-0 \
      libatk1.0-0 \
      libcups2 \
      libdbus-1-3 \
      libdrm2 \
      libgbm1 \
      libglib2.0-0 \
      libgtk-3-0 \
      libnspr4 \
      libnss3 \
      libpango-1.0-0 \
      libx11-6 \
      libxcb1 \
      libxcomposite1 \
      libxdamage1 \
      libxext6 \
      libxfixes3 \
      libxkbcommon0 \
      libxrandr2 \
    && rm -rf /var/lib/apt/lists/*

COPY app/package*.json ./
RUN npm install --no-audit --no-fund

CMD ["npm", "start"]
