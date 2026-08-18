# ---- Stage 1: Build ----
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ---- Stage 2: Serve ----
FROM nginx:stable-alpine AS production

# Copy the built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Custom Nginx config for SPA routing (react-router-dom)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
