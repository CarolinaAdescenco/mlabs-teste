import React from 'react';

import Box from '../../components/box';
import Header from '../../components/header';
import { Button, Input, Textarea, Wrapper, Row, Panel } from './styles';

import social from '../../data/social-networks.json';

const PageAppointments = () => {
  const { data } = social;
  const [selected, setSelected] = React.useState([]);

  // validar se item esta ativo
  // adicionar ou remover do preview no clique do botao

  return (
    <>
      <Header />
      <Wrapper>
        <Panel>
          <Row>
            <Box title="Redes Sociais">
              {data.map(item => (
                <Button
                  key={item.id}
                  status={item.status}
                  selected={selected === item.id}
                  onClick={() => setSelected(item.id)}
                >
                  <i className={`fab fa-${item.icon}`} />
                </Button>
              ))}
            </Box>
            <Box title="Data de publicação">
              <Input type="date" />
              <Input type="time" />
            </Box>
          </Row>
          <Row>
            <Box title="Texto do post">
              <Textarea placeholder="Aqui vai o texto descritivo desse post" />
            </Box>
          </Row>
        </Panel>
        <Panel>
          <Row>
            <Box title="Visualização do post" />
          </Row>
        </Panel>
      </Wrapper>
    </>
  );
};

export default PageAppointments;
