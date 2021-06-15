import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

// APIから返却される型
export type ResultType = {
  current: {
    condition: {
      // eslint-disable-next-line
      temp_c: string;
      text: string;
      icon: string;
    };
  };
  location: {
    country: string;
    name: string;
  };
};

// 保存用の型
export type ResultState = ResultType['current']['condition'] &
  ResultType['location']; // eslint-disable-line

function App(): JSX.Element {
  // eslint-disable-next-line
  const [city, setCity] = useState<string>('');
  const [result, setResult] = useState<ResultState>();
  const getWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: ResultType = await fetch('http://localhost:3000/weather')
      .then((x) => x.json())
      .then((x) => x)
      .catch((err) => {
        // TODO: あとで例外処理の機構を作る..
        // eslint-disable-next-line
        console.log(err);
      });
    setResult({
      country: data.location.country,
      name: data.location.name,
      temp_c: data.current.condition.temp_c,
      text: data.current.condition.text,
      icon: data.current.condition.icon,
    });
  };

  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result result={result} />
    </div>
  );
}

export default App;
