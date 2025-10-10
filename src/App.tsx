import NavbarMobile from "@/components/navbarMobile/navbar";
import NavbarDesktop from "@/components/navbarDesktop/navbar";

export default function App() {
  return (
    <main className="relative bg-gradient-to-br from-blue-200 to-slate-50">
      <NavbarMobile />
      <NavbarDesktop />
      <section id="home" className="min-h-screen pt-20 px-8">
        <h2 className="text-4xl font-bold mb-4">Home</h2>
        <p>Welcome to HabbitZone</p>
      </section>

      <section id="about" className="min-h-screen pt-20 px-8 bg-white">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p>Learn about our habit tracking solution</p>
      </section>

      <section id="services" className="min-h-screen pt-20 px-8">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p>What we offer</p>
      </section>

      <section id="tools" className="min-h-screen pt-20 px-8 bg-white">
        <h2 className="text-4xl font-bold mb-4">Tools</h2>
        <p>Our tracking tools</p>
      </section>

      <section id="pricing" className="min-h-screen pt-20 px-8">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p>Choose your plan</p>
      </section>
    </main>
  );
}
