import Chakra from '@/components/Chakra';
import './globals.css'
import { Inter } from 'next/font/google'
import { ControlOrbitProvider, DynamicElementProvider } from '@/context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AV Room',
  description: 'Create your own custommized room!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chakra>
          <DynamicElementProvider>
            <ControlOrbitProvider>
              {children}
            </ControlOrbitProvider>
          </DynamicElementProvider>
        </Chakra>
      </body>
    </html>
  );
}
