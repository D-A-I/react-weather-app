import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ResultState } from '../App';
import { MapToUnion } from '../shared/UtilityTypes';

type ResultProps = {
  result: ResultState | undefined;
};

const prepareDataAcq = (props: ResultState) => {
  return (key: keyof ResultState): MapToUnion<ResultState> =>
    props ? props[key] : '';
};

const Result: React.FC<ResultProps> = (props) => {
  const { result } = props;

  // result が空の場合
  if (!result) return <div />;

  const getValue = prepareDataAcq(result);
  return (
    <Card style={{ width: '18rem', marginTop: '1rem' }}>
      <ListGroup variant="flush">
        <ListGroupItem>{getValue('name')}</ListGroupItem>
        <ListGroupItem>{getValue('country')}</ListGroupItem>
        <ListGroupItem>
          {getValue('temp_c')} <span>℃</span>
        </ListGroupItem>
        <ListGroupItem>
          <img src={getValue('icon')} alt="icon" />
          <span>{getValue('text')}</span>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Result;
