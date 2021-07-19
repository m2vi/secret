import { Container, Input } from './styles';

import { useState, FC } from 'react';

export const Home: FC = () => {
  const [type, setType] = useState('password');

  return (
    <Container>
      <Input placeholder='Password' type={type} />
    </Container>
  );
};
