import React, { FormEvent } from 'react';

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent) => void;
};

const Form: React.FC<FormProps> = ({ setCity, getWeather }) => {
  return (
    <form onSubmit={(e) => getWeather(e)}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
