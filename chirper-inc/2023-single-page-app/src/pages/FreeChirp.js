import React from "react";
import "./Free.css";
import { Card, Form } from 'react-bootstrap';
import Button from '../components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


function Chirp({ chirp, index, removeChirp }) {
  return (
    <div
      className="chirp"
      onClick={removeChirp}
    >
      <span>{chirp.text}</span>

    </div>
  );
}

function FormChirp({ addChirp }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addChirp(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Chirp</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new chirp" />
    </Form.Group>
    <Button handleClick={handleSubmit}>
  </Form>
  );
}

function FreeChirp() {
  const [chirps, setChirps] = React.useState([
    {
      text: "This is a sampe chirp",
    }
  ]);

  const addChirp = text => {
    const newChirps = [...chirps, { text }];
    setChirps(newChirps);
  };

  const removeChirp = index => {
    const newChirps = [...chirps];
    newChirps.splice(index, 1);
    setChirps(newChirps);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Chirp List</h1>
        <FormChirp addChirp={addChirp} />
        <div>
          {chirps.map((chirp, index) => (
            <Card>
              <Card.Body>
                <Chirp
                key={index}
                index={index}
                chirp={chirp}
                removeChirp={removeChirp}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FreeChirp;