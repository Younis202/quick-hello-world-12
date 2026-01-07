import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/pages/AboutPage.html')
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
