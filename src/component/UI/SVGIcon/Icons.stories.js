import styled from '@emotion/styled';
import Icons from './Icons';
import s from 'S';

export default {
  title: 'Icon',
};

const CloseIcon = styled(Icons.close)`
  stroke: black;
  stroke-width: 3px;
`;

export const Icon = () => (
  <div>
    {Object.keys(Icons).map((key) => {
      const Icon = Icons[key];
      if (key === 'close') return;

      return (
        <s.Row style={{ marginBottom: '10px' }}>
          <span style={{ width: '100px' }}>{key}</span>
          <Icon key={key} width="30px" height="30px" />
        </s.Row>
      );
    })}
    <s.Row style={{ marginBottom: '10px' }}>
      <span style={{ width: '100px' }}>close</span>
      <CloseIcon width="30px" height="30px" />
    </s.Row>
  </div>
);
