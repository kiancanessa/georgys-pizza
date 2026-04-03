import Nav          from "@/components/Nav";
import Hero         from "@/components/Hero";
import Strip        from "@/components/Strip";
import MenuSection  from "@/components/MenuSection";
import About        from "@/components/About";
import OrderHub     from "@/components/OrderHub";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Strip />
      <MenuSection />
      <About />
      <OrderHub />
      <Footer />
    </main>
  );
}
