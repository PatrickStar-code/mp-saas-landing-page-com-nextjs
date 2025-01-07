import Callout from "./_components/callout";
import HowWorkSection from "./_components/howWorkSection";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen overflow-y-auto">
      <section
        className="min-w-full h-full"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Callout />
        <HowWorkSection />
      </section>
    </main>
  );
}
