import React, { useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef(() => {});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      console.log("response.data: ", response.data);
      setHits(response.data?.hits || []); //?. is optional chaining operator
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`Something went wrong ${error} `);
    }
  };

  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 p-5 block w-full rounded-md mb-5 transition-all focus:border-blue-400"
        placeholder="Typing your keyword to search..."
        defaultValue={query}
        onChange={handleUpdateQuery}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && <h3 className="text-red-400 my-5">{errorMessage}</h3>}
      <div className="flex flex-wrap gap-5">
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title} className="p-3 bg-gray-100 rounded-md ">{item.title}</h3>)}
      </div>
    </div>
  );
};

export default HackerNews;
