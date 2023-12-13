import { useEffect } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("https://stockmarketsecrets.exposed");
    }, 500);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Wooten Wealth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Wooten Wealth" />
        {/* Embed Zoho Form */}
        <div id="zohoFormContainer"></div>
      </main>

      <Footer />
      <script type="text/javascript">
        // Load Zoho Form
        var formScript = document.createElement("script");
        formScript.type = "text/javascript";
        formScript.src =
          "https://forms.zohopublic.com/js/zEmbed.js";
        document.body.appendChild(formScript);

        // Define form settings
        var zf_settings = {
          formid: "yourFormID",
          domain: "yourDomain",
          width: "100%",
        };
        var zf_perma = zf_perma || {};
        zf_perma.showForm = true;
        zf_perma["yourFormID"] = zf_settings;
      </script>
    </div>
  );
}
