import './globals.css';
import Footer from './components/Footer/Footer';
import ContactButtons from './components/ContactButtons';


export const metadata = {
  title: 'Sin piojos La Villa',
  description: 'elimniacion de piojos y liendres',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        
        <Footer />
        <ContactButtons />
      </body>
    </html>
  )
}
