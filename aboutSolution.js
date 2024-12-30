```javascript
// pages/aboutSolution.js
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Image src='/image.png' alt='About Page Image' width={500} height={300} />
    </div>
  );
}
```