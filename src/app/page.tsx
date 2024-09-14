"use client"
import AboutUsSection from "@/components/home/AboutUsSection";
import HeroSection from "@/components/home/HeroSection";
import RoomsSection from "@/components/home/RoomsSection";
import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <AboutUsSection />
        <RoomsSection />
      </main>
    </Layout>
  );
}
