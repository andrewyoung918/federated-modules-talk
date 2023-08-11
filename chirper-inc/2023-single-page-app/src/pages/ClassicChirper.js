import React from "react";
import Button
 from "../components/Button";
export default function Classic () {
    return (
    <div>
    <h1>Chirper</h1>
        <label for="fchirp">Describe Chirp:</label><br>
        <input type="text" id="fchirp" name="fchirp" value="Chirp"/>
        <Button />
    </div>
    );
}