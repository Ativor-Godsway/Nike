import BestSellers from "../components/BestSellers";
import Collections from "../components/collections";
import Hero from "../components/Hero";

export default function HompePage() {
  return (
    <div className="homepage">
      <Hero />
      <Collections />
      <BestSellers />
    </div>
  );
}
