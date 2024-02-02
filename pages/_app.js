import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="beforeInteractive">
        {`
          const img = new Image();
          img.src = '/images/slider/slider-bg.jpg';
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
