import { useQuery } from "react-query";

function MyComponent() {
  const { data, isLoading, isError } = useQuery("myData", fetchData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data.</p>;
  }

  return (
    <div>
      {/* Render your component with the fetched data */}
      <p>{data}</p>
    </div>
  );
}

export default MyComponent;
