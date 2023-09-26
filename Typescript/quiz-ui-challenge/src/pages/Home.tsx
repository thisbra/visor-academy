import styled from "styled-components";
import Button from "../components/Button";
import BodyWrap from "../components/BodyWrapper";

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.pWhite};
  color: ${(props) => props.theme.colors.pBlack};
  border-radius: 1.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  padding: 0.8rem 1.5rem;
  width: 22rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const InputWrapper = styled.input`
  height: 2.2rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
`;

function Home() {
  return (
    <BodyWrap>
        <div style={ { marginBottom: '5rem' , fontSize: '2rem', fontWeight: '700'} } 
            >Enter Quiz</div>

        <CardWrapper>
          <div style={ { fontSize: '1.2rem', fontWeight: '600' } } >Insert Quiz id:</div>
          <InputWrapper
            type="text"
            placeholder="Quiz id"
            />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '0.5rem',
          }}
          >
            <Button 
              variant="filled"
              value="Edit README"
              // link={`/edit/${cardTitle}`} 
              />
          </div>
        </CardWrapper>
    </BodyWrap>
  );
}

export default Home;
