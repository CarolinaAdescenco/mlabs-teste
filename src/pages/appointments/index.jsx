import React from 'react';

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
  const selectedArray = [];

  const postInformation = {
    user: 'Anselmo Carlos',
    date: '06 de Setembro',
    title: 'Aqui vai o texto descritivo desse post',
    image: Image,
  };

  const handleSelected = React.useCallback(id => {
    if (selectedArray.find(i => i === id)) {
      const index = selectedArray.indexOf(id);
      if (index > -1) {
        selectedArray.splice(index, 1);
      }
    } else {
      selectedArray.push(id);
    }
  }, []);

  const renderInstagram = React.useEffect(() => {
    return selectedArray.find(i => i === 2) ? (
      <InstagramPreview data={postInformation} />
    ) : (
      ''
    );
  }, [selectedArray]);

  const renderLinkedin = React.useEffect(() => {
    return selectedArray.find(i => i === 3) ? (
      <LinkedinPreview data={postInformation} />
    ) : (
      ''
    );
  }, [selectedArray]);

  return (
    <Layout>
      <Wrapper>
        <Panel>
          <Row>
            <Box half title="Redes Sociais">
              {data.map(item => {
                return (
                  <Option key={item.id} status={item.status}>
                    <input
                      onClick={() => handleSelected(item.id)}
                      type="checkbox"
                      id={item.id}
                    />
                    <label htmlFor={item.id}>
                      <i className={`fab fa-${item.icon}`} />
                    </label>
                  </Option>
                );
              })}
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
                {(renderInstagram, renderLinkedin)}

                <PlaceholderPreview />
                {/* <InstagramPreview data={postInformation} />
                <LinkedinPreview data={postInformation} /> */}
              </BoxPreview>
            </Box>
          </Row>
        </Panel>
      </Wrapper>
    </Layout>
  );
};

export default PageAppointments;
