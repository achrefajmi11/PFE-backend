//import { DehazeTwoTone } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./userList.css";
//import { DataGrid } from "@material-ui/data-grid";
//import { DeleteOutline } from "@material-ui/icons";
//import { Link } from "react-router-dom";
//import "./product.css";
//import Chart from "../../components/chart/Chart"
//import {productData} from "../../dummyData"
//import { Publish } from "@material-ui/icons";

export default function UserList() {
  

  const [data, setData] = useState([]);
  
  useEffect(()=> {
  getusers() ;

  }, []);
  const getusers = async () => {
const response = await axios.get("http://localhost:3005/users")
      if(response.status ===200) {
        setData(response.data);

      }
  };
 
    console.log("data=>" , data);
      
        return (
          <div style={{marginTop: "1px" ,width: "5000px" }}>
          
           
          <table className="styled-table">
            
            <thead>
              <tr>
                <th  style={{textAlign: "Center"}}>id</th>
                <th  style={{textAlign: "Center"}}>fullName</th>
                <th  style={{textAlign: "Center"}}>username</th>
                <th  style={{textAlign: "Center"}}>matricule</th>
          </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) =>{

    return(
      <tr key={index}>
        <th scope="row" >{index +1}</th>
    
        <td>{item.fullName}</td>
        <td>{item.username}</td>
      
        <td>{item.matricule}</td>
    </tr>
    );
})}
           </tbody>
          </table>
          </div>
        );
         };