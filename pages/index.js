import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: "#201F1D" }}>
      <Head>
        <title>Wooten Wealth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Add Image with marginTop */}
        <img
          src="imgs/smse-desktop.png"
          alt="Stock Market Secrets Exposed"
          style={{ maxWidth: "500px", height: "auto", marginTop: "35px" }} // Add marginTop
        />

        {/* Embed Zoho Form */}
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
