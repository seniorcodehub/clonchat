import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="problem-solution">
        <ProblemSolution />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}