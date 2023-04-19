import axios from "axios";
import { QueryClient, useQueryClient, useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const fetchDataAxios = async () => {
    const result = await axios.get(`${url}&query=${searchTerm}`);
    return result.data;
  };
  const query = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: fetchDataAxios,
  });

  if (query.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (query.isError) {
    return (
      <section className="image-container">
        <h4>There is an error..</h4>
      </section>
    );
  }
  const result = query.data.results;
  if (result.length < 1) {
    return (
      <section className="image-container">
        <h4>No images Found..</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {result.map((items) => {
        const url = items?.urls?.regular;
        return (
          <img
            src={url}
            key={items.id}
            alt={items.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
