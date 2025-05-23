# 🚀 AutoChronos

A **Distributed Job Scheduler** that supports both **periodic** and **one-time** jobs. Built to be highly scalable and performant, it efficiently schedules and executes tasks via worker nodes using modern technologies like **BullMQ**, **Redis**, **Docker Swarm**, and more.

---

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [SOLID Principles & Design Patterns](#solid-principles--design-patterns)
- [🛠️ Tools Used](#️tools-used)
- [🏗️ Architecture](#️architecture)
- [⚙️ Setup and Run Instructions](#setup-and-run-instructions)
- [📽️ Demo](#️demo)
- [🔗 Important Links](#important-links)
- [👨‍💻 Contributors](#contributors)

---

## 📌 About the Project

- **Project Area:** Distributed job scheduling system with support for periodic and one-time tasks.
- **Objective:** Develop a highly scalable scheduler that assigns tasks to distributed workers.
- **Job Types:** 
  - One-time jobs
  - Periodic jobs (configured using cron expressions)

### 🔁 Job Execution Flow

1. User inputs a shell command on the frontend.
2. Frontend sends the API request to the backend server.
3. The backend pushes the job to a **BullMQ queue**.
4. Workers dequeue and execute jobs on their local system.

---

## 🧠 SOLID Principles & Design Patterns

This project uses **TypeScript** and incorporates multiple software design principles and patterns for clean, maintainable code:

- ✅ **SOLID** Principles
- 🧱 **Singleton** Pattern
- 🎭 **Facade** Pattern
- 🧩 **Strategy** Pattern
- 🏗️ **Builder** Pattern

---

## 🛠️ Tools Used

### 💻 Tech Stack

- [Next.js](https://nextjs.org/) – Frontend framework
- [Node.js](https://nodejs.org/en) – Backend runtime
- [MongoDB](https://www.mongodb.com/) – NoSQL Database
- [BullMQ](https://docs.bullmq.io/) + [Redis](https://redis.io/) – Job queue and broker
- [Docker](https://www.docker.com/) + [Docker Swarm](https://docs.docker.com/engine/swarm/) – Container orchestration

### ☁️ Deployment

- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Render](https://render.com/)

> **Pricing:** Free versions used  
> **Why it's a great fit:**
> - Easy setup & CI/CD via Git integration  
> - Autoscaling & container support  
> - Managed databases  
> - Free HTTPS, DDoS protection, SSL, and more

**🧩 Alternatives:**

- [DigitalOcean](https://www.digitalocean.com/)
- [Fly.io](https://fly.io/)
- [Google Cloud Run](https://cloud.google.com/run)
- [Dokku](https://dokku.com/)

---

## 🏗️ Architecture

> *(Add your system architecture image here)*  
> ![Architecture Diagram](path-to-your-diagram)

---

## 🚀 Setting Up and Running the Code

Follow the steps below to run the **AutoChronos** backend on your local system:

### 🛠️ Prerequisites

- [pnpm](https://pnpm.io/installation)
- [Redis](https://redis.io/) (running on port `6379`)
- [Node.js](https://nodejs.org/en)
- Docker (optional, for Redis container)

---

### 📦 Step-by-Step Setup

1. **Clone the Repository**  
   Open a terminal and run the following command:
   ```bash
   git clone https://github.com/Srajan-Sanjay-Saxena/AutoChronos
   cd AutoChronos


1.  📥 **Install Dependencies:** Open your terminal and run the following command to install all the necessary packages:

    ```bash
    pnpm i
    ```

2.  ⚙️ **Redis Requirement:** Ensure you have a Redis container running smoothly in the background, listening on port `6379`.

3.  🚀 **Launch Backend & Redis:** Execute these commands in your terminal to start the backend and the Redis worker:

    ```bash
    pnpm start-express
    pnpm start-redis
    ```

4.  ✅ **Backend Running\!** You should now have the backend successfully running on your local machine.

## Demonstration of the working model:

[![Demo video]()]()


## 🔗 Important Links:

  * **Frontend Repository:** 💻 [Link to the frontend repo](https://github.com/vivekmaurya001/TaskMaster)
  * **Backend Deployed Site:** 🌐 [Link to the deployed site for backend](http://localhost:3001)
  * **Frontend Deployed Site:** 🌐 [Link to the deployed site for frontend](http://localhost:3000)

## 🧑‍💻 Contributors:

1.  🌟 [Srajan Sanjay Saxena](https://github.com/Srajan-Sanjay-Saxena)
2.  👨‍💻 [Siddhant Baranwal](https://github.com/Siddhant-Baranwal)
3.  🚀 [Vivek Maurya](https://github.com/vivekmaurya001)
4.  🎨 [Saksham Chauhan](https://github.com/kaneki003)