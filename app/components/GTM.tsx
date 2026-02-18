'use client';

import Script from 'next/script';

const GTM_ID = 'GTM-K3GSDLG2'; // Reemplaza con tu ID
const G_TAG_ID = 'AW-11478236051';

export const GoogleTagManager = () => (
  <>
    {/* Script de Google Ads / GA4 */}
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-ads-tag" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${G_TAG_ID}');
      `}
    </Script>

    {/* Componente noscript para el body (GTM) */}
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