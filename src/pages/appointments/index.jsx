import React, { useState } from 'react';

import Box from '../../components/box';

import PlaceholderPreview from '../../components/preview/placeholder';
import LinkedinPreview from '../../components/preview/linkedin';
import InstagramPreview from '../../components/preview/instagram';

import {
  Option,
  Input,
  Wrapper,
  Row,
  Panel,
  Textarea,
  BoxPreview,
} from './styles';

import social from '../../data/social-networks.json';
import Layout from '../../components/layout';
import UploadFiles from '../../components/upload';

const PageAppointments = () => {
  const { data } = social;
  const [selectedIds, setSelectedIds] = useState([]);

  const postInformation = {
    user: 'Anselmo Carlos',
    date: '06 de Setembro',
    title: 'Aqui vai o texto descritivo desse post',
    image: Image,
  };

  const onSocialButtonClick = itemId => {
    const selectedIndex = selectedIds.find(id => id === itemId);

    if (selectedIndex) {
      const newArr = selectedIds.splice(selectedIndex, 1);
      setSelectedIds(newArr);
    } else {
      setSelectedIds(oldArr => [...oldArr, itemId]);
    }
  };

  const isSelected = itemId => {
    const index = selectedIds.indexOf(itemId);
    const selected = index >= 0;

    return selected;
  };

  return (
    <Layout>
      <Wrapper>
        <Panel>
          <Row>
            <Box half title="Redes Sociais">
              {data.map(({ id, icon }) => (
                <Option
                  key={id}
                  selected={isSelected(id)}
                  onClick={() => onSocialButtonClick(id)}
                >
                  <input type="checkbox" id={id} />
                  <label htmlFor={id}>
                    <i className={`fab fa-${icon}`} />
                  </label>
                </Option>
              ))}
            </Box>
            <Box half title="Data de publicação">
              <Row>
                <Input type="date" />
                <Input type="time" />
              </Row>
            </Box>
          </Row>
          <Row>
            <Box title="Texto do post">
              <Textarea placeholder="Aqui vai o texto descritivo desse post" />
            </Box>
          </Row>
          <Row>
            <Box title="Upload de imagem">
              <UploadFiles />
            </Box>
          </Row>
        </Panel>
        <Panel>
          <Row>
            <Box title="Visualização do post">
              <BoxPreview>
                <PlaceholderPreview />
                {isSelected(2) && <LinkedinPreview data={postInformation} />}
                {isSelected(3) && <InstagramPreview data={postInformation} />}
              </BoxPreview>
            </Box>
          </Row>
        </Panel>
      </Wrapper>
    </Layout>
  );
};

export default PageAppointments;
