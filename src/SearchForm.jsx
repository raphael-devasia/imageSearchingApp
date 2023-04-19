import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { searchTerm, searchHandler } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    searchHandler(searchValue);
  };
  // const handleChange = (e) => {};

  return (
    <section>
      <h1 className="title">Image Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
