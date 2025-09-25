# Git

## Version control for professionals

### About This Repository

This repository contains an interactive HTML presentation about Git version control system. The presentation covers fundamental Git concepts, commands, and workflows designed for professional developers.

**Features:**
- 🎯 Comprehensive Git tutorial from basics to advanced topics
- 🌐 Available in both English and Spanish
- 📱 Responsive design that works on desktop and mobile
- 🎨 Interactive slide-based presentation using Shower framework
- ⚡ Live development server with hot reload

**Topics Covered:**
- Version control fundamentals
- Git installation and configuration
- Basic Git workflow (add, commit, push, pull)
- Branching and merging strategies
- Working with remote repositories
- Git best practices and troubleshooting

**View:**

http://Mgldvd.github.io/git-presentation/

## Development

### Prerequisites
- [Bun](https://bun.sh/) - A fast all-in-one JavaScript runtime

### Setup and Run

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start development server:**
   ```bash
   bun run dev
   ```
   This will start a local server at `http://localhost:8888` and automatically open the presentation at `http://localhost:8888/gh-pages/index.html`

### Available Scripts

- `bun run dev` - Start development server with file watching
- `bun run build` - Build the project
- `bun start` - Start the server

-----

## Github

To push changes into gh-pages

```bash
git subtree push --prefix gh-pages origin gh-pages
```
