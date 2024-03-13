import UseFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, loading } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error,data, loading);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {
        loading ? <h3>Pending Please Wait</h3> : null
      }{
        error ? <h3>Error Occured</h3>: null
      }{
        data && data.products && data.products.length  ? 
        data.products.map(productItem =>
        <p style={{textAlign:"center",marginBottom:"20px",marginTop:"20px"}}
          key={productItem.key}>{productItem.title}</p>
          
          ):null
      }
    </div>
  );
}
