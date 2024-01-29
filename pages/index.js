import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("https://www.youtube.com/@JFWooten4");
    }, 0);
    return () => clearTimeout(redirectTimeout);
  }, []);
}
