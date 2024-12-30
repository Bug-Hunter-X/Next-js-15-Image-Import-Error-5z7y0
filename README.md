# Next.js 15 Image Import Error

This repository demonstrates a common error encountered when working with image imports in Next.js 15 applications. The issue arises from an incorrect import statement that leads to a runtime error. 

## Problem
The `about.js` file attempts to import an image using an incorrect syntax. The `import('./image.png');` statement is not the correct way to import images within a functional component in Next.js.

## Solution
The solution involves using the correct image import method.  In the corrected `aboutSolution.js` file, the image is imported using the `next/image` component.

## How to reproduce the error
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page. You should see an error in the console.

## How to fix the error
1. Replace `about.js` with `aboutSolution.js`.
2. Rerun the development server.
3. Navigate to the `/about` page. The image should now display correctly.