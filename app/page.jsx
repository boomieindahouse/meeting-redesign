import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Services />
      <Projects />
    </main>
  );
}