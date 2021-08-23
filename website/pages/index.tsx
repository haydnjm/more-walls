import Head from "next/head";
import Description from "../components/Description";
import Hero from "../components/Hero";
import Proposition from "../components/Proposition";
import GymLink from "../components/GymLink";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MORE WALLS</title>
        <meta name="description" content="More climbing for everybody" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Description />
        <Proposition />
        <GymLink />
      </main>
    </div>
  );
}
