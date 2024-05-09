import NavBar from "@/app/(components)/nav/NavBar";
import Footer from "@/app/(components)/footer/Footer";
import Partiful from "./Partiful";
import WordHippo from "./WordHippo";

interface FeaturedPageProps {
  params: {
    project: string
  }
}

export default function FeaturedPage({
  params: { project },
}: FeaturedPageProps) {
  return (
    <>
      <NavBar />
      { project === "partiful" && <Partiful /> }
      { project === "wordhippo" && <WordHippo /> }
      {/* { project === "partiful" && <Partiful /> } */}
      <Footer />
    </>
  );
}