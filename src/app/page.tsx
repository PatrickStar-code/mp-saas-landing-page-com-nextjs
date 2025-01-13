import Callout from "./_components/callout";
import FinalSection from "./_components/FinalSection";
import Footer from "./_components/footer";
import HowWorkSection from "./_components/howWorkSection";
import Navbar from "./_components/navbar";
import PlansSection from "./_components/plansSection";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen overflow-y-auto">
      <div
        className="min-w-full h-full"
        style={{
          backgroundImage: "url('/images/Background.png')",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Callout />
      </div>

      <HowWorkSection />
      <div
        className="min-w-full h-full"
        style={{
          backgroundImage: "url('/images/Background.png')",
          backgroundSize: "cover",
        }}
      >
        <PlansSection />
      </div>

      <FinalSection />
      <Footer />
    </main>
  );
}
