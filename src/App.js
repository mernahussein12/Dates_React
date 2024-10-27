import {  Container} from "react-bootstrap"
import React, {useState, useEffect} from "react";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DataList from "./components/DataList";
import DatesAction from "./components/DatesAction";
function App() {
 const [personData, setPersonData] = useState(person);
 const onDelet = () =>{
  setPersonData([])
 }
 const onViewData = () =>{
  setPersonData(person)
}
useEffect(() => {
  setPersonData([])
}, []);

  return (
    <div className="font color-body">
     <Container className="py-5">
       <DatesCount person={personData}/>
        <DataList person={personData} />
        <DatesAction deletData={onDelet} onViewData={onViewData}/>
      

     </Container>
  
    </div>
  );
}

export default App;
