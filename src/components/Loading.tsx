import React from 'react';
import { Spinner } from 'react-bootstrap';

type LoadingProps = {
  isLoading: boolean;
};

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (!isLoading) return <div />;
  return <Spinner animation="border" style={{ marginTop: '1rem' }} />;
};

export default Loading;
