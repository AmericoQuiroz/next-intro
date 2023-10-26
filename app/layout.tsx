import NavBar from "../components/NavBar";
import "./globals.css";

export const metadata = {
  title: {
    default: "My Next App",
    template: "%s | My Next App",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-blue-50 flex flex-col px-4 py-2 min-h-screen lg:max-w-[80%] xl:max-w-[80%] mx-auto">
        <header>
          <NavBar />
        </header>
        <main className="grow">{children}</main>
        <footer className="border-t text-center text-slate-500 text-xs py-4">
          Powered by
          <a
            href="https://www.jalasoft.com/"
            target="_blank"
            className="text-blue-500 hover:underline ml-1"
          >
            JALASOFT
          </a>
        </footer>
      </body>
    </html>
  );
}
