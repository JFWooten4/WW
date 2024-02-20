import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("https://www.youtube.com/jfwooten4?sub_confirmation=1");
    }, 0);
    return () => clearTimeout(redirectTimeout);
  }, []);
  
  return (
    <div className="container" style={{ backgroundColor: "#201F1D" }}>
      <Head>
        <title>Wooten Wealth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
