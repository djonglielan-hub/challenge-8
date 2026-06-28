import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import TrustedBrands from '../components/sections/TrustedBrands';
import Stats from '../components/sections/Stats';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import Industry from '../components/sections/Industry';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <main className='min-h-screen bg-black text-white'>
      <div className='mx-auto max-w-[1440px] overflow-hidden'>
        <Navbar />
        <Hero />
        <TrustedBrands />
        <Stats />
        <Process />
        <Services />
        <Industry />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
