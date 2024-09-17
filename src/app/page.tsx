"use client"
import AboutUsSection from "@/components/home/AboutUsSection";
import ContactUs from "@/components/home/ContactUsSection";
import HeroSection from "@/components/home/HeroSection";
import LocationSection from "@/components/home/LocationSection";
import RoomsSection from "@/components/home/RoomsSection";
import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutUsSection />
        <RoomsSection />
        <ContactUs />
        <LocationSection />
      </main>
    </Layout>
  );
}
