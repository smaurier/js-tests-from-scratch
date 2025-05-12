import React from 'react';
import { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <label htmlFor="name">Nom :</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setSubmitted(true)}>Envoyer</button>

      {submitted && <p>Bonjour {name} !</p>}
    </div>
  );
}
