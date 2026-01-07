import { useEffect, useState } from 'react';

export default function HomePage() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/pages/HomePage.html')
      .then((res) => res.text())
      .then((html) => setHtmlContent(html));
  }, []);

  return (
    <div 
      className="page-wrapper"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
