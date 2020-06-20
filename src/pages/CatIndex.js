import React, {useEffect, useState } from "react";
import {
  ListGroup,Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from "reactstrap";
import "../App.css";

const CatIndex = (props) => {
  const [newCats, setNewCats] = useState([])
  //useEffect hook lets us GET all cats from the database when the component loads
  //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{
    grabCats()},[])

  async function grabCats () {
    try {
      //GET data from the backend
      let response = await fetch("http://localhost:3000/cats")
      let data = await response.json();
      //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("data", data)
        //populate the newCats state array with data
        setNewCats(data)
      }
    } catch (err) {
        console.log(err)
    }
  }

    return (
      <React.Fragment>
        {props.cats.map((cat, index) => {
          return (
            <div>
            <Card className="card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <ListGroup key={index}>
                    <CardImg top width="100%" src={ cat.image } alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{cat.name}</CardTitle>
                    <CardSubtitle>Age: {cat.age}</CardSubtitle>
                    <CardText>Enjoys: {cat.enjoys}</CardText>
                    <Button href="" color="info">View Profile -- need url</Button>
                    </CardBody>
                </ListGroup>
            </Card>
            </div>
          );
        })}
        </React.Fragment>
    );
  };
  export default CatIndex;