import React,{useState} from 'react'
import GetData from './GetData';
import axios from 'axios';

const Weath=(props)=>{

    const [data,setData]=useState([])
    const [loading, setLoadinng] = React.useState(true);
    const [city,setCity]=useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.get(`http://localhost:5000/getcityweather/${city}`);
            setData(result.data);
            setLoadinng(false);
            console.log(result.data)
          } catch (e) {
            console.log("Error is, ", e);
          }
      };


     return(
    
        <div className="box">
            <div className="inputdata">
                city:
                <input
                type="text"
                className="inputfield"
                value={city}
                onChange={ (e)=>{setCity(e.target.value)}
                }
                />

                <button
                 onClick={onSubmit} >search</button>
            </div>
            <div>
               {data.length!==0}
               <div>
                {data[0].city}<br></br>
                {data[0].temp}<br></br>
                {data[0].min_temp}<br></br>
                {data[0].max_temp}<br></br>
                {data[0].atmo}<br></br>
                {data[0].humidity}<br></br>
                </div>
            </div>
        </div>

       

        
    )
}

export default Weath