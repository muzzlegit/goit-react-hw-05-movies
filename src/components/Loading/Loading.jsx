import { Dna } from 'react-loader-spinner';
//STYLES
import { Container } from './Loading.styled';

const Loading = () => {
  return (
    <Container>
      <Dna
        visible={true}
        height="600px"
        width="600px"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      ;
    </Container>
  );
};

export default Loading;
