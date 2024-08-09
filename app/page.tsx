import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";

export default function Home() {
  return (
    <>
      <Hero 
        title="A place to find afforable healthcare"
        subtitle="We aim to make healthcare easy to find."
      />
      <div className="w-9/12 m-auto">
        <About/>
        <Contact/>
      </div>
    </>
  );
}
