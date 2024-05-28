import Cursor from '@/components/CursorFollow';
import Socials from '@/components/Socials';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Cursor />
          <Navbar />
          {children}
          <Socials />
        </body>
      </html>
    </AuthProvider>
  );
}
