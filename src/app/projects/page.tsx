"use client";

import NavBar from "../(components)/nav/NavBar";
import Footer from "../(components)/footer/Footer";
import SideLine from "../(components)/line/SideLine";
import MainProject from "./MainProject";

export default function ProjectsPage() {
  return (
    <>
      <NavBar page="projects" />

      <main className="xs:px-48 lg:px-[120px] py-24">
        <SideLine text="Case Studies" />
        <p className="text-14"> A few carefully curated projects that I&apos;m particularly proud of. </p>

        <section className="grid lg:grid-cols-2 xs:p-24 lg:p-36 gap-48 justify-center">
          <MainProject title="Partiful" description="Designing new, fun features for Gen Z's favorite party planning site" src="partiful" href="/projects/partiful" />
          <MainProject title="Word Hippo" description="Redesigning the internet's favorite thesaurus for improved usability" src="wordhippo" href="/projects/wordhippo" />
          <MainProject title="Figma Grapes Exporter" description="Streamlining marketing campaigns via Figma-to-Braze Integrations" src="grapes" href="/projects/grapes" />
        </section>
      </main>

      <Footer />
    </>
  );
}