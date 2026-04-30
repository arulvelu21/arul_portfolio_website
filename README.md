# AI & Automation Engineer Portfolio

A premium, multi-page Next.js portfolio designed for an AI-Powered Automation Engineer. The application features a high-end dark theme SaaS UI, framer-motion animations, responsive layouts, and an integrated contact form wired directly to an n8n automation webhook.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Integration:** n8n Webhook API proxy

---

## Local Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Deployment Guide: Hostinger VPS + PM2 + Caddy

This guide covers deploying this application to a Hostinger VPS using **PM2** (to keep the app running) and **Caddy** (as a reverse proxy to handle SSL/HTTPS automatically).

### 1. SSH into your VPS
```bash
ssh root@YOUR_VPS_IP_ADDRESS
```

### 2. Install Dependencies (Node.js & PM2)
If you haven't already, install Node and PM2 on the server:
```bash
# Install Node.js (via NVM or apt)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
npm install -g pm2
```

### 3. Clone and Build the App
Clone this repository to your server and build the production bundle:
```bash
# Clone the repository
git clone https://github.com/arulvelu21/arul_portfolio_website.git portfolio
cd portfolio

# Install dependencies
npm install

# Build the Next.js production bundle
npm run build
```

### 4. Start the Application with PM2
An `ecosystem.config.js` file is already included in the repository. Simply run:
```bash
# Start the app
pm2 start ecosystem.config.js

# Save the process list to restart automatically on server reboot
pm2 save
pm2 startup
```
*Your application is now running locally on the server on port 3000.*

### 5. Expose via Caddy Reverse Proxy
To securely expose the app to the internet with an automatic SSL certificate, configure Caddy:

1. Open your Caddyfile:
```bash
sudo nano /etc/caddy/Caddyfile
```

2. Add the following block (replace `yourdomain.com` with your actual domain):
```caddyfile
yourdomain.com {
    reverse_proxy localhost:3000
}
```

3. Reload Caddy:
```bash
sudo systemctl reload caddy
```

That's it! Your site will be live at `https://yourdomain.com`.

---

## n8n Webhook Note
The contact form uses a Next.js API route (`/api/contact/route.ts`) to forward POST requests directly to your n8n workflow. Make sure your n8n Production Webhook node is active and listening for POST requests to successfully receive messages!
