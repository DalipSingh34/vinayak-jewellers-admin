# Cloudflare Configuration & Performance Optimization

## Objective

Cloudflare is used to improve the security, speed, and availability of the Vinayak Jewellers website.

---

## DNS Configuration

- Domain connected to Cloudflare
- DNS records proxied through Cloudflare
- Automatic DNS management

---

## SSL/TLS

Configuration:

- SSL Mode: Full (Strict)
- Always Use HTTPS: Enabled
- Automatic HTTPS Rewrites: Enabled

Benefits:

- Secure communication
- End-to-end encryption
- Better SEO

---

## Performance Optimization

Enabled Features:

- Auto Minify (HTML)
- Auto Minify (CSS)
- Auto Minify (JavaScript)

- Brotli Compression

- HTTP/2

- HTTP/3

- Rocket Loader (Optional)

---

## Caching

Browser Cache TTL

Recommended:
4 Hours

Edge Cache

Static Assets:

- Images
- CSS
- JavaScript

Dynamic API responses are excluded from aggressive caching.

---

## Security

Enabled:

- Web Application Firewall (WAF)

- Bot Protection

- DDoS Protection

- Rate Limiting

- Browser Integrity Check

- Security Headers

---

## Image Optimization

Recommended:

- Polish
- Mirage

These features improve image loading performance while reducing bandwidth usage.

---

## Page Rules / Cache Rules

Recommended Rules

Rule 1

URL:

/uploads/*

Action:

Cache Everything

---

Rule 2

URL:

/admin/*

Action:

Bypass Cache

---

Rule 3

URL:

/api/*

Action:

No Cache

---

## Monitoring

Cloudflare Analytics can be used to monitor:

- Traffic
- Cache Hit Ratio
- Bandwidth Usage
- Threat Detection
- Performance Metrics

---

## Expected Benefits

- Faster page loading
- Reduced server load
- Improved SEO
- Better security
- Global CDN delivery
- Protection against DDoS attacks