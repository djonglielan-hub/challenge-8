import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import Hero from '../components/sections/Hero';
import TrustedBrands from '../components/sections/Trustedbrands';
import Stats from '../components/sections/Stats';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import Industry from '../components/sections/Industry';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className='container mx-auto px-6'>
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
  );
};

export default Home;
