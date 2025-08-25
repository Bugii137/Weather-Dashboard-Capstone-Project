import Landing from "../components/Landing";
import SearchBar from "../components/SearchBar";
import FeatureCards from "../components/FeatureCards";

export default function Home({ onSearch }) {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <Landing />
      <SearchBar onSearch={onSearch} />
      <FeatureCards />
    </div>
  );
}
