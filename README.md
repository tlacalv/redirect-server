# Redirect App

Simple Express.js application that redirects all traffic from one url to another

## Overview

This app performs a 301 (permanent) redirect from one url to another

## Configuration

Environment variables are stored in `.env` file:

- `SOURCE_URL` - The source domain
- `TARGET_URL` - The destination URL
- `PORT` - Server port (default: 3000, automatically set by Vercel)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env if needed
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Test the redirect:
   ```bash
   curl -I http://localhost:3000
   # Should return: HTTP/1.1 301 Moved Permanently
   ```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Set environment variables in Vercel:
   ```bash
   vercel env add TARGET_URL
   ```

4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard (GitHub Integration)

1. Push code to GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - `TARGET_URL`
6. Deploy

## Custom Domain Setup

1. In Vercel Dashboard, go to your project → Settings → Domains
2. Add custom domain
3. Vercel will provide DNS configuration (CNAME record)
4. Provide the following to your IT team for DNS update:
   ```
   Type: CNAME
   Name: design (or @)
   Value: cname.vercel-dns.com (or your specific Vercel DNS)
   ```
5. Wait for DNS propagation (can take up to 48 hours, usually faster)
6. Vercel will automatically provision SSL certificate

## Testing After Deployment

```bash
# Test redirect
curl -I https://example.domain.com

# Expected response:
# HTTP/2 301
# location: https://target.domain.com/
```

## Acceptance Criteria ✓

- [x] example.domain.com redirects without errors to taret.domain
- [x] Uses 301 permanent redirect
- [x] Simple, foolproof implementation
- [x] URLs configurable via environment variables
- [x] Automatic SSL via Vercel

## Troubleshooting

**Redirect not working locally:**
- Check that `.env` file exists and contains `TARGET_URL`
- Verify server is running on correct port

**Custom domain not working:**
- Verify DNS records are correctly configured
- Check Vercel dashboard for domain status
- Wait for DNS propagation (use `dig example.domain.com` to check)

**SSL certificate issues:**
- Vercel automatically provisions SSL certificates
- Ensure DNS is properly pointed to Vercel before adding custom domain
