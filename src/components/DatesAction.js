import React from "react"
import { Row, Col,Button } from "react-bootstrap";


const DatesAction = ({deletData, onViewData}) => {
return(

<Row className="justify-content-center my-2">
<Col sm="8" className=" d-flex justify-content-between">
<Button onClick={deletData} className="btn-style p-2">مسح الكل</Button>
<Button onClick={onViewData} className="btn-style p-2">عرض البيانات</Button>
</Col>
</Row>
)
}
export default DatesAction