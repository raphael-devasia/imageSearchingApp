import Gallery from "./Gallery";
import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import { useGlobalContext } from "./context";


const App = () => {

  
  return (
    <main>
      <section>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </section>
    </main>
  );
};
export default App;
