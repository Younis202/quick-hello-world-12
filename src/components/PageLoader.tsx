import { useEffect, useState } from 'react';

interface PageLoaderProps {
  pageName: string;
}

export default function PageLoader({ pageName }: PageLoaderProps) {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    fetch(`/pages/${pageName}.html`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load ${pageName}`);
        }
        return res.text();
      })
      .then((html) => {
        // Extract styles from head
        const styleMatches = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
        
        // Remove any previously injected styles
        document.querySelectorAll(`style[data-page="${pageName}"]`).forEach(el => el.remove());
        
        // Inject styles into document head
        styleMatches.forEach((styleTag) => {
          const styleEl = document.createElement('style');
          styleEl.setAttribute('data-page', pageName);
          const contentMatch = styleTag.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
          if (contentMatch) {
            styleEl.textContent = contentMatch[1];
            document.head.appendChild(styleEl);
          }
        });
        
        // Extract body content
        let bodyContent = '';
        
        // Find the __next div
        const nextStart = html.indexOf('<div id="__next"');
        if (nextStart !== -1) {
          const bodyEnd = html.indexOf('</body>');
          if (bodyEnd !== -1) {
            bodyContent = html.substring(nextStart, bodyEnd);
            // Remove script tags
            bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
          }
        }
        
        // Fallback to body content
        if (!bodyContent) {
          const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
          if (bodyMatch) {
            bodyContent = bodyMatch[1];
            bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
          }
        }
        
        setHtmlContent(bodyContent);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading page:', err);
        setHtmlContent('<div style="padding: 20px; text-align: center;">Error loading page</div>');
        setIsLoading(false);
      });
      
    return () => {
      document.querySelectorAll(`style[data-page="${pageName}"]`).forEach(el => el.remove());
    };
  }, [pageName]);

  if (isLoading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div 
      className="page-wrapper"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
