import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../App.css";

const NewCat = (props) => {
  const [cats, setCats] = useState([]);

  const [form, setState] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });

  const handleChange = (e) => {
    setState({
      //take all the existing form data and,...
      ...form,
      //...add new data to the end as it is typed
      [e.target.name]: e.target.value,
    });
  };

  const pushCats = (newcat) => {
      console.log(newcat)
  }

  const handleSubmit = (e) => {
    // keeps react from refreshing the page unnessarily
    e.preventDefault();
    // show the current state in the console (should see all cats created)
    console.log(form);
    // set the cats state to include all cats
    // since the current cat state is immutable, we need to create a copy of it and add the new cat to it
    setCats((cats) => [...cats, form]);
    // // send all cats in the state to the backend to post to the database
    pushCats(form).then();
  };

  return (
    <>
      <Form>
      <Row form>
        <Col md={6}>
        <FormGroup>
          <Label htmlFor="name" id="name">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
          <Label htmlFor="age" id="age">
            Age
          </Label>
          <Input
            type="text"
            name="age"
            onChange={handleChange}
            value={form.age}
          />
        </FormGroup>
        </Col>
        </Row>
        <FormGroup>
          <Label htmlFor="image" id="image">Image URL</Label>
          <Input type="url" name="image" placeholder="" onChange={ handleChange } value={ form.image }/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="enjoys" id="enjoys">
            Enjoys
          </Label>
          <Input
            type="textarea"
            name="enjoys"
            onChange={handleChange}
            value={form.enjoys}
          />
        </FormGroup>
        <Button color="info" onClick={ handleSubmit } id="submit">
          Add New Cat
        </Button>
      </Form>
    </>
  );
};

export default NewCat;