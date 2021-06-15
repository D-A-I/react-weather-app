import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent) => void;
};

const Form: React.FC<FormProps> = ({ setCity, getWeather }) => {
  return (
    <form onSubmit={(e) => getWeather(e)}>
      <FormGroup>
        <FormControl
          type="text"
          className=""
          placeholder="都市名"
          onChange={(e) => setCity(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button variant="primary" type="submit">
          Get Weather
        </Button>
      </FormGroup>
    </form>
  );
};

export default Form;
