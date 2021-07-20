import { Container, Input } from './styles';

import { useState, FC, useEffect } from 'react';
import crypt from '../../utils/crypt';

export const Home: FC = () => {
  const [type, setType] = useState('password');

  useEffect(() => {
    const cipher = crypt.encrypt('hallo');
    const plain = crypt.decrypt(cipher);

    console.log(plain);
  }, [crypt]);

  return (
    <Container>
      <Input placeholder='Password' type={type} />
    </Container>
  );
};
