import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
} from "semantic-ui-react";
//import Mydate from './Datepicker'
import { useHistory } from "react-router-dom";
import { useState } from "react";

const payOptions = [
  { key: "m", text: "MasterCard", value: "mastercard" },
  { key: "v", text: "VisaCard", value: "visacard" },
  { key: "w", text: "WesternUnion", value: "western" },
  { key: "p", text: "PayPal", value: "paypal" },
];

const Myform = () => {
  const history = useHistory();
  return (
    // <Segment inverted>
    <Form inverted style={{ width: "100%", backgroundColor: "black" }}>
      <Form.Group widths="equal">
        <Form.Field
          control={Select}
          options={payOptions}
          label={{
            children: "MODE DE PAIEMENT",
            htmlFor: "form-select-control-gender",
          }}
          placeholder="Selectionner votre mode de paiement"
          search
          searchInput={{ id: "form-select-control-pay" }}
        />
        <Form.Field
          id="form-input-control-date"
          control={Input}
          label="Numero de la carte "
          placeholder="Entrer le numero de votre carte"
        />

        <Form.Field
          id="form-input-control-date"
          control={Input}
          label="Code CVV"
          placeholder="Entrer votre code de securité"
        />

        <Form.Field
          id="form-input-control-date"
          control={Input}
          label="Date expiration cart "
          placeholder="Entrer la date"
        />
      </Form.Group>

      <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Addresse de l`entrepot"
        placeholder="Addresse complet de l`entrepot"
      />

      <Form.Field
        id="form-input-control-error-email"
        control={Input}
        label="Email"
        placeholder="ex:joelsyasi@gmail.com"
      />

      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Envoyer"
        onClick={() => history.push("/Confirmation")}
      />
    </Form>
    // </Segment>
  );
};

export default Myform;