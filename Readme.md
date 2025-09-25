# Git

## Version control for professionals

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
