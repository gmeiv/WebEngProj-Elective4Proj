# --- STAGE 1: Dependencies Cache ---
FROM node:20-alpine AS deps

WORKDIR /app

# Copy package files first to cache node_modules
COPY package.json package-lock.json ./
RUN npm ci

# --- STAGE 2: Build Application ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy cached dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Build EE app
RUN npm run build

# --- STAGE 3: Production ---
FROM nginx:stable-alpine

# Clean default Nginx html folder
RUN rm -rf /usr/share/nginx/html/*

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Configure SPA routing for React Router
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

# Healthcheck to ensure deployment is live
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:80/ || exit 1

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]