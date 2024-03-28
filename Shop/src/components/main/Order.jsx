import { useState, useEffect } from "react";
function Order() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("Product.Product")
        .select("*");
      if (error) {
        throw error;
      }
      setData(data);
      console.log(data);
    } catch (error) {
      alert("Error fetching data:");
    }
  };
  return (
    <div>
      <h1>My Component</h1>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default Order;
