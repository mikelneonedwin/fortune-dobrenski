import CurrentStatus from "@/components/v2/current-status";
import Experience from "@/components/v2/experience";
import Footer from "@/components/v2/footer";
import Header from "@/components/v2/header";
import MainLayout from "@/components/v2/main-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fortune Ishaku – Product Developer & Software Architect at Applift Labs",
  description:
    "Founder of Applift Labs, Fortune Ishaku leads product development, team strategy, and innovative software solutions that bridge user needs with technology.",
  openGraph: {
    title:
      "Fortune Ishaku – Product Developer & Software Architect at Applift Labs",
    description:
      "Fortune Ishaku runs Applift Labs, driving product vision, leadership, and cutting-edge solutions that connect user problems with modern software design.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Fortune Ishaku – Product Developer & Software Architect at Applift Labs",
    description:
      "Founder of Applift Labs, Fortune Ishaku builds and leads modern software solutions that move the company and its partners forward.",
  },
};

export default function Page() {
  return (
    <MainLayout>
      <Header />
      <CurrentStatus />
      <Experience />
      <Footer />
    </MainLayout>
  );
}
