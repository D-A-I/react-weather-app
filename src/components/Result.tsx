import React from 'react';
import { ResultState } from '../App';
import { MapToUnion } from '../shared/UtilityTypes';

type ResultProps = {
  result: ResultState | undefined;
};

const existsProperty = (props: ResultState) => {
  return (key: keyof ResultState): MapToUnion<ResultState> =>
    props ? props[key] : '';
};

const Result: React.FC<ResultProps> = (props) => {
  const { result } = props;

  // result が空の場合
  if (!result) return <div />;

  const getValue = existsProperty(result);
  return (
    <div>
      <div>{getValue('name')}</div>
      <div>{getValue('country')}</div>
      <div>
        {getValue('temp_c')} <span>℃</span>
      </div>
      <div>
        <img src={getValue('icon')} alt="icon" />
        <span>{getValue('text')}</span>
      </div>
    </div>
  );
};

export default Result;
