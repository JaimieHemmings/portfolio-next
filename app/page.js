import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Jaimie Hemmings | Home',
  description:
    'Personal Portfolio for Jaimie Hemmings, A Javascript/React developer with 5 years experience. Developed in Next.js with MongoDB.',
};

export default function Home() {
  return (
    <main>
      <Hero
        title="I'm"
        titlesubtext="Jaimie Hemmings"
        text="A Javascript/React Developer with over 5 years experience of turning bugs and caffiene into code that produces beautiful seamless user experiences"
        button="Contact Me"
      />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <section className="thanks container mx-auto pb-20 pt-20 text-center">
        <h2 className="text-4xl text-gold">"Thanks for scrolling!"</h2>
      </section>
    </main>
  );
}
