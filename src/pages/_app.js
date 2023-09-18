import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <div className=" antialiased font-openSans">
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
