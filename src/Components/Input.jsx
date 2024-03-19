import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const Input = ({ handleInputChange, value, handleButtonClick }) => {
  return (
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Original URL"
            aria-label="link"
            aria-describedby="basic-addon2"
            value={value}
            onChange={handleInputChange}
          />
          <Button
            variant="success"
            id="button-addon2"
            onClick={handleButtonClick}
          >
            Shorten
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Input;
