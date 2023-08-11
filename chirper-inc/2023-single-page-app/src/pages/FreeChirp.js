import React from "react";
import "./Free.css";
import { Panel, Form } from 'react-bootstrap';
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
    addChirp({text:value});
    setValue("");
  };

  return (
    <div>
    <input onChange={(e)=>setValue(e.target.value)} />
    <Button click={handleSubmit}>Send Chirp</Button>
  </div>
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
    <div className="chirper">
      <div className="container">
        <h1 className="text-center mb-4">Chirp List</h1>
        <FormChirp addChirp={addChirp} />
        <div>
          {chirps.map((chirp, index) => (
            <Panel>
                <Chirp
                key={index}
                index={index}
                chirp={chirp}
                removeChirp={removeChirp}
                />
            </Panel>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FreeChirp;