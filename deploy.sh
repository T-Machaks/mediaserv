#!/usr/bin/env bash
# Deploy the latest mediaserv site. nginx proxies to the Node server on :3000
# (systemd unit mediaserv-website.service), which must be restarted after this
# script to pick up the new build.
set -euo pipefail

cd "$(dirname "$0")"

echo "Pulling latest..."
git pull

echo "Installing dependencies..."
npm install

echo "Cleaning previous build output and caches..."
rm -rf .next node_modules/.cache .turbo

echo "Building..."
npm run build

echo "Build complete."
