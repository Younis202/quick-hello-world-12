import { useEffect, useState } from 'react';

interface PageLoaderProps {
  pageName: string;
}

export function usePageContent(pageName: string) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch(`/pages/${pageName}.html`)
      .then((res) => res.text())
      .then((html) => {
        // Extract styles from head and inject into document head
        const styleMatches = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
        
        // Remove any previously injected styles for this page
        const existingStyles = document.querySelectorAll(`style[data-page="${pageName}"]`);
        existingStyles.forEach(el => el.remove());
        
        // Inject styles into document head
        styleMatches.forEach((styleTag) => {
          const styleEl = document.createElement('style');
          styleEl.setAttribute('data-page', pageName);
          // Extract content from style tag
          const contentMatch = styleTag.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
          if (contentMatch) {
            styleEl.textContent = contentMatch[1];
            document.head.appendChild(styleEl);
          }
        });
        
        // Extract body content - find the __next div or body
        let bodyContent = '';
        
        // Try to get the __next div content
        const startIndex = html.indexOf('<div id="__next"');
        if (startIndex !== -1) {
          const endTag = '</body>';
          const endIndex = html.indexOf(endTag);
          if (endIndex !== -1) {
            // Get content from __next to before </body>
            let content = html.substring(startIndex, endIndex);
            // Remove trailing scripts
            const scriptStart = content.lastIndexOf('<script');
            if (scriptStart !== -1) {
              content = content.substring(0, scriptStart);
            }
            bodyContent = content;
          }
        }
        
        // If we couldn't extract __next, try to get body content
        if (!bodyContent) {
          const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
          if (bodyMatch) {
            bodyContent = bodyMatch[1];
            // Remove scripts
            bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
          }
        }
        
        setHtmlContent(bodyContent);
      });
      
    // Cleanup function to remove styles when component unmounts
    return () => {
      const existingStyles = document.querySelectorAll(`style[data-page="${pageName}"]`);
      existingStyles.forEach(el => el.remove());
    };
  }, [pageName]);

  return { htmlContent };
}

export default function PageLoader({ pageName }: PageLoaderProps) {
  const { htmlContent } = usePageContent(pageName);

  return (
    <div 
      className="page-wrapper"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
