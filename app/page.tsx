import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";

export default function Home() {
  return (
    <>
      <Hero 
        title="Finding afforable healthcare near you."
        subtitle="Why should healthcare be so expensive?"
      />
      <div className="w-9/12 m-auto">
        <About/>
        <Contact/>
      </div>
    </>
  );
}
