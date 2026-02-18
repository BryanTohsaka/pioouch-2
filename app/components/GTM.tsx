'use client';

import Script from 'next/script';

const GTM_ID = 'GTM-K3GSDLG2'; // Reemplaza con tu ID

export const GoogleTagManager = () => (
  <>
    {/* Script para el head */}
    <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11478236051"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11478236051'); </script>

    
    {/* Componente noscript para el body */}
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  </>
);