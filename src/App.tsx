import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Services from '@/components/servicess/Services';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <footer></footer>
    </>
  );
}
