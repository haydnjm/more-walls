import Head from "next/head";
import { useState } from "react";
import Description from "../components/Description";
import Hero from "../components/Hero";
import GymSignupForm from "../components/GymSignupForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MoreWalls</title>
        <meta name="description" content="More climbing for everybody" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Description />
        {/*
        <Proposition /> 
        */}
        <GymSignupForm />
      </main>
    </div>
  );
}
