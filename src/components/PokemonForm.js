import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {


  const [formData, setFormData] = useState({
    name: "",
    hp: "",
      frontUrl: "",
      backUrl: "",

})

function handleFormChange(e) {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    })
}

function handleSubmit(e) {
      e.preventDefault()

      const newPokemon = {
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl,
        },
      }

      fetch("http://localhost:3001/pokemon", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json"
        },
        body:  JSON.stringify(newPokemon)
      })
      .then(res => res.json())
      .then(addPokemon)
      
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleFormChange} value={formData.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleFormChange} value={formData.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleFormChange}
            
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleFormChange}
            
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
