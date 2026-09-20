#!/usr/bin/env bash
# Deploy the latest mediaserv site (static build, served directly by nginx).
set -euo pipefail

cd "$(dirname "$0")"

echo "Pulling latest..."
git pull

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build

echo "Done. nginx serves the new build directly — no restart needed."
