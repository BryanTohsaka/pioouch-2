import './globals.css';
import Footer from './components/Footer/Footer';
import Btnwp from './components/Btnwp';
import { GoogleTagManager } from './components/GTM'; // Importa el componente

export const metadata = {
  title: 'Piouch Off',
  description: 'elimniacion de piojos y liendres',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body>
        <GoogleTagManager />
        {children}
        <Btnwp />
        <Footer />
      </body>
    </html>
  )
}