# Copenhagen JS 9/2025 - React Server Components

This project was created for a demo presentation at Copenhagen JS (September 2025) showcasing React Server Components (RSC), streaming capabilities, and the idea behind RSC.

## Project Overview

This repository contains three main demonstrations:

1. **Next.js Streaming Demo** (`/app/streaming/`) - Shows React Suspense and streaming with multiple async components
2. **Vanilla RSC Implementation** (`/vanilla-rsc/`) - A custom React Server Components implementation in vanilla JavaScript
3. **Initial Vanilla Project** (`/vanilla-rsc-init/`) - The starting point before RSC implementation

## Project Structure

```
├── app/
│   ├── streaming/          # Next.js streaming demo with Suspense
│   ├── cat-names/          # Cat name generator demo
│   └── ...
├── vanilla-rsc/            # Custom RSC implementation
│   ├── server.ts           # Node.js server with RSC-like behavior
│   ├── client.js           # Client-side JavaScript
│   └── styles.css          # Styling
├── vanilla-rsc-init/       # Initial vanilla implementation
│   ├── server.ts           # Basic server setup
│   ├── client.js           # Simple client code
│   └── styles.css          # Styling
└── cats.txt               # Cat names data file
```

## Getting Started

### Prerequisites

- Bun

### Running the Demos

#### 1. Next.js Streaming Demo

```bash
bun dev
```

Visit [http://localhost:3000/streaming](http://localhost:3000/streaming) to see the streaming demo with multiple Suspense boundaries.

#### 2. Vanilla RSC Implementation

```bash
bun run cat-names
```

Visit [http://localhost:3000](http://localhost:3000) to see the vanilla RSC implementation.

#### 3. Initial Vanilla Project

```bash
bun run cat-names-init
```

---

_Created for Copenhagen JS September 2025 - React Server Components Demo_
