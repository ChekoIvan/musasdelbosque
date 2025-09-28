# GitHub Pages Deployment Guide

This Next.js project is configured to be deployed to GitHub Pages under a subpath.

## Project Configuration

### Next.js Configuration (`next.config.ts`)
- `output: 'export'` - Enables static export for GitHub Pages
- `trailingSlash: true` - Ensures URLs work correctly with GitHub Pages
- `images: { unoptimized: true }` - Disables Next.js image optimization (not supported in static export)
- `basePath: '/musasdelbosque'` - Sets the subpath for your site
- `assetPrefix: '/musasdelbosque/'` - Ensures assets are loaded from the correct subpath

**Important**: Replace `musasdelbosque` with your actual repository name in `next.config.ts`.

## Deployment Steps

### 1. Initial Setup

1. **Create a GitHub repository** with the same name as your project
2. **Update the repository name** in `next.config.ts`:
   ```typescript
   basePath: '/your-repository-name',
   assetPrefix: '/your-repository-name/',
   ```

3. **Install dependencies** (if not already done):
   ```bash
   yarn install
   ```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to the `main` branch

### 3. Deploy Your Site

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Add your GitHub repository as remote**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repository-name.git
   ```

3. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

4. **Wait for deployment**: The GitHub Action will automatically build and deploy your site

### 4. Access Your Site

Your site will be available at:
```
https://yourusername.github.io/your-repository-name/
```

## Local Development

### Run the development server:
```bash
yarn dev
```

### Build for production:
```bash
yarn build
```

### Test the static export locally:
```bash
yarn export
```

The built files will be in the `out/` directory.

## Important Notes

1. **Repository Name**: Make sure the `basePath` and `assetPrefix` in `next.config.ts` match your repository name exactly.

2. **Static Export Limitations**:
   - No server-side rendering (SSR)
   - No API routes
   - No dynamic routes with `getServerSideProps`
   - Images are not optimized

3. **Custom Domain**: If you want to use a custom domain, you can configure it in GitHub Pages settings, but you'll need to update the `basePath` and `assetPrefix` accordingly.

4. **Environment Variables**: Use `NEXT_PUBLIC_` prefix for client-side environment variables.

## Troubleshooting

### Common Issues:

1. **404 on refresh**: This is normal for static sites. Consider using a custom 404 page.

2. **Assets not loading**: Check that `assetPrefix` matches your repository name.

3. **Build fails**: Ensure all dependencies are properly installed and there are no TypeScript errors.

4. **Deployment not working**: Check the Actions tab in your GitHub repository for error logs.

## File Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── .nojekyll              # Prevents Jekyll processing
├── src/
│   └── app/                   # Next.js App Router
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
└── .gitignore                 # Git ignore rules
```

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository name matches the configuration
3. Ensure all files are committed and pushed
4. Check GitHub Pages settings
