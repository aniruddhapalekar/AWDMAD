import React from "react";
import axios from "axios";
import Weath from "./Weath";

const GetData = (props) => {
    
   
    const [data, setData] = React.useState([]);
    const [loading, setLoadinng] = React.useState(true);
    console.log(data.data)
    React.useEffect(() => {
      const getData = async () => {
        try {
          const result = await axios.get("http://localhost:5000/getcityweather",props);
          setData(result.data);
          setLoadinng(false);
        } catch (e) {
          console.log("Error is, ", e);
        }
      };
      getData();
    }, []);
  return(
      <div>
          <h2>{props.city}</h2>
      </div>
  )

}

export default GetData