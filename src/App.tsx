import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Gallery from './components/Galery/Gallery';
import Contact from './components/ContactForm/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App; 
