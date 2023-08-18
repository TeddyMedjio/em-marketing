import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className=" antialiased font-openSans">
      <Component {...pageProps} />
    </div>
  );
}
