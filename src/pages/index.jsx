import Header from "../components/Layout/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Layout/Footer";

export default function IndexPage() {
  return (
    <>
      <main className="flex flex-col justify-between w-full min-h-screen">
        <Header />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
