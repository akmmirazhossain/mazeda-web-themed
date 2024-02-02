import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const loadImage = () => {
    const img = new Image();
    img.src = "/images/slider/slider-bg.jpg";
  };

  return (
    <>
      <Component {...pageProps} />
      <script
        dangerouslySetInnerHTML={{ __html: `(${loadImage.toString()})();` }}
      />
    </>
  );
}
