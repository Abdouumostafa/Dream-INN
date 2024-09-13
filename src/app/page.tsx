"use client"
import AboutUsSection from "@/components/home/AboutUsSection";
import HeroSection from "@/components/home/HeroSection";
import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUsSection />
    </Layout>
  );
}
