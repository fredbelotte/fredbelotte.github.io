import "../sass/main.scss";
import Footer from "../components/footer.component";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
