import React from "react";
import Button from "../components/Button";

const Classic = () => {
    return (
        <div>
        <h1>Chirper</h1>
            <label for="fchirp">Describe Chirp:</label>
            <input type="text" id="fchirp" name="fchirp" value="Chirp"/>
            <Button> Send Chirp</Button>
        </div>
    )
 
}
export default Classic;