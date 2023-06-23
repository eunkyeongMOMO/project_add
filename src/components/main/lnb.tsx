import React, { useEffect, useState } from 'react';

function Lnb() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/family_site.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => {
        console.error('Error fetching HTML file:', error);
      });
  }, [])
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default Lnb;