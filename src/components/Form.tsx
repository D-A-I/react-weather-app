import React from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';

type FormProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent) => void;
};

const WeatherForm: React.FC<FormProps> = ({ city, setCity, getWeather }) => {
  return (
    <Form onSubmit={(e) => getWeather(e)}>
      <Form.Group as={Row}>
        <Col sm="10">
          <Form.Control
            placeholder="都市名"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
        <Col sm="2">
          <Button variant="primary" type="submit">
            Get Weather
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default WeatherForm;
