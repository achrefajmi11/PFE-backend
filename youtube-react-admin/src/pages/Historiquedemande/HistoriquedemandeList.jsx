//i//import { DehazeTwoTone } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./HistoriquedemandeList.css";
//import { DataGrid } from "@material-ui/data-grid";
//import { DeleteOutline } from "@material-ui/icons";
//import { Link } from "react-router-dom";
//import "./product.css";
//import Chart from "../../components/chart/Chart"
//import {productData} from "../../dummyData"
//import { Publish } from "@material-ui/icons";

export default function HistoriquedemandeList() {
  

  const [data, setData] = useState([]);
  
  useEffect(()=> {
  getusers() ;

  }, []);
  const getusers = async () => {
const response = await axios.get("http://localhost:3005/conge")
      if(response.status ===200) {
        setData(response.data);

      }
  };
 
    console.log("data=>" , data);
    
        return (
          <div style={{marginTop: "1px", width:"5000px"}}>
          <table className="styled-table">
            
            <thead>
              <tr>
                <th  style={{textAlign: "Center"}}>id</th>
                <th  style={{textAlign: "Center"}}>type_Conge</th>
                <th  style={{textAlign: "Center"}}>date_debut</th>
                <th  style={{textAlign: "Center"}}>date-retour</th>
                <th  style={{textAlign: "Center"}}>nombre_jrs</th>
          </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) =>{

    return(
      <tr key={index}>
        <th scope="row" >{index +1}</th>
    
        <td>{item.type_Conge}</td>
        <td>{item.date_debut}</td>
        <td>{item.date_retour}</td>
        <td>{item.nombre_jrs}</td>
        

    </tr>
    );
})}
           </tbody>
          </table>
          </div>
        );
         };    
      
      