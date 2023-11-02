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
    }, 2000);

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
        <p className="description">Coming Soon</p>
      </main>

      <Footer />
    </div>
  );
}
