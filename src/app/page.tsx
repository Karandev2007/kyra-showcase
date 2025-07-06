import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import LoadingScreen from './components/LoadingScreen';
import TrustedSecure from './components/TrustedSecure';
import Creator from './components/Creator';
import Comments from './components/Comments';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <LoadingScreen />
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <TrustedSecure imagePath="/kyra.png">
        <p>
          Kyra is designed with built-in protections to safeguard your privacy and keep you in control.
        </p>
        <p>
          Layers of security help keep your experience safe and your data secure.
        </p>
      </TrustedSecure>
      <Comments />
      <Creator 
        name="Karan"
        description={[
          "Full Stack Developer and Data Science enthusiast passionate about uncovering insights and building impactful solutions",
        ]}
        imagePath="/karan.png"
      />
      <Footer />
    </main>
  );
}