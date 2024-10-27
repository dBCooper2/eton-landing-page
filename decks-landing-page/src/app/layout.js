// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Deck & Fencing Company',
  description: 'Quality Deck and Fencing Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-red-500 to-yellow-300">
        <main className="flex-grow">{children}</main>
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 text-white">
          <div className="relative w-full h-20">
            {/* Placeholder for the banner image */}
            <img
              src="/placeholder-banner.jpg" // Placeholder image path
              alt="Fence Banner"
              className="object-cover w-full h-full opacity-75"
            />
          </div>
          <div className="text-center py-2">
            <p>© 2023 Deck & Fencing Company. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
