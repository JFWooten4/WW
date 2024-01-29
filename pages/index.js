import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("https://www.youtube.com/@JFWooten4");
    }, 100);
    return () => clearTimeout(redirectTimeout);
  }, []);
  
  return (
    <div className="container" style={{ backgroundColor: "#201F1D" }}>
      <Head>
        <title>Wooten Wealth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src="imgs/smse-desktop.png"
          alt="Stock Market Secrets Exposed"
          style={{ maxWidth: "500px", height: "auto", marginTop: "35px" }} // Add marginTop
        />
        
        <iframe
          aria-label="Wooten Wealth Pre-Launch Signups"
          frameBorder="0"
          style={{ height: "600px", width: "99%", border: "none" }}
          src="https://forms.zohopublic.com/blocktransfer/form/WootenWealthPreLaunchSignups/formperma/93cnN8rejRNSy4wtlV7CELjldUtFNpkG-PYGBwrfBK4"
        ></iframe>
      </main>

      <Footer />
    </div>
  );
}
