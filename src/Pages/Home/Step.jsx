import { useEffect, useState } from "react";
import { Card, Col, Container,Image,Row } from "react-bootstrap";

const Step = () => { 
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('/steps.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div className="mb-4">
            <Container>
                <Row >
                   {users.map((da, index) =>(
                     <Col key={index}>
                     <Card style={{ width: '18rem' }} className="border-0">
                         <Card.Img variant="top" src="" roundedCircle/>
                         <div className="d-flex justify-content-center align-items-center">
                         <Image
                          src={da?.image} roundedCircle width="100"
                         ></Image>
                         </div>
                         <Card.Body>
                             <Card.Title className="d-flex justify-content-center align-items-center"><span className="fw-bold">{da?.step_name}</span></Card.Title>
                             <Card.Text className="d-flex justify-content-center align-items-center">
                                 {da?.des}
                             </Card.Text>
                         </Card.Body>
                     </Card>
                 </Col>
                   ))}
                </Row>
            </Container>
        </div>
    );
};

export default Step;