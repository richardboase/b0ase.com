import './globals.css';
import { MenuProvider } from './context/MenuContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="font-arial">
        <MenuProvider>
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
