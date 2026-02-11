# Deployment Guide for NGO Tech Jobs

This guide covers two ways to deploy the **NGO Tech Jobs** application:
1.  **Vercel** (Recommended for easiest setup & best performance)
2.  **Docker** (For Hostinger VPS, DigitalOcean, or any container platform)

---

## Option 1: Vercel (Recommended)

Next.js is built by the team at Vercel, so this is the native way to deploy.

1.  **Push your code to GitHub/GitLab/Bitbucket**.
2.  Go to [vercel.com](https://vercel.com) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your `ngo-tech-jobs` repository.
5.  **Framework Preset**: It should auto-detect "Next.js".
6.  **Build Command**: `next build` (default).
7.  **Click Deploy**.

Vercel will build your site and give you a live URL (e.g., `ngo-tech-jobs.vercel.app`).

---

## Option 2: Docker (Hostinger VPS / Any Server)

If you prefer to host it yourself on a VPS (like Hostinger KVM) using Docker.

### Prerequisites on your Server
- SSH access to your server.
- [Docker](https://docs.docker.com/engine/install/) installed.
- [Git](https://git-scm.com/downloads) installed.

### Steps

#### 1. Optimization (Already configured)
We have already enabled `output: 'standalone'` in `next.config.js` and created a multi-stage `Dockerfile` to keep the image small (~100MB instead of 1GB+).

#### 2. Build the Image
On your local machine (or directly on the server if you clone the repo there):

```bash
# Build the image tag it 'ngo-jobs'
docker build -t ngo-jobs .
```

#### 3. Run the Container
Run the container mapping port 3000 to your desired port (e.g., 80 or 3000).

```bash
# Run in background (-d) on port 3000
docker run -d -p 3000:3000 --name ngo-jobs-container ngo-jobs
```

 Your app is now running at `http://YOUR_SERVER_IP:3000`.

### Using Docker Compose (Optional but recommended)
You can create a `docker-compose.yml` file on your server:

```yaml
version: '3'
services:
  ngo-jobs:
    image: ngo-jobs:latest
    build: .
    ports:
      - "3000:3000"
    restart: always
```

Then run: `docker-compose up -d --build`

### Hostinger Specifics
If you are using a Hostinger VPS:
1.  **Login via SSH**: `ssh root@your_vps_ip`
2.  **Install Docker**: Hostinger usually has an "OS Template" with Docker pre-installed (Ubuntu with Docker). If not, search "Install Docker on Ubuntu".
3.  **Clone your repo**: `git clone https://github.com/your-username/ngo-tech-jobs.git`
4.  **Enter directory**: `cd ngo-tech-jobs`
5.  **Build & Run**: Use the commands in Step 2 & 3 above.

---

## Environment Variables
If you add API keys later (e.g. for a database), remember to pass them to Docker:

```bash
docker run -d -p 3000:3000 -e DATABASE_URL="..." ngo-jobs
```
