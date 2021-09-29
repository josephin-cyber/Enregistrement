import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import 'semantic-ui-css/semantic.min.css';

function Form() {
  const [date, setDate] = useState(null);
  const handleDateChange = (event, data) => setDate(data.value);

  return (
    <div className="App">
 
      <h2>Selectionner la date:</h2>
      <SemanticDatepicker onChange={handleDateChange} />

      <pre>
        Selected date:
        <br />
        {date ? date.toString() : 'None'}
      </pre>
    </div>
  );
}

export default Form;