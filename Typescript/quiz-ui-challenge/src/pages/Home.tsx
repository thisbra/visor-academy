import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import BodyWrap from "../components/BodyWrapper";
import postRequest from "../utils/postRequest";
import IQuiz from "../interfaces/IQuiz";
import Loading from "../components/Loading";

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.pWhite};
  color: ${(props) => props.theme.colors.pBlack};
  border-radius: 1.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  padding: 0.8rem 1.5rem;
  width: 22rem;
  height: 13rem;
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
  const [isLoading, setIsLoading] = useState(false);

  const handleStartQuiz = async () => {
    setIsLoading(true);
    try {
      const usernameIdElement = document.getElementById('username') as HTMLInputElement;
      const usernameId = usernameIdElement.value;
      
      const response = await postRequest(`/api/quiz`, JSON.stringify({numberOfParticipants: 1}));

      if (response) {
        const data: IQuiz = await response.json();
        window.location.href = `/quiz/${data._id}`;
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  if (isLoading) return (
    <Loading />
  )

  return (
    <BodyWrap>
        <div style={ { marginBottom: '5rem' , fontSize: '2rem', fontWeight: '700'} } 
            >Let's Quiz!</div>

        <CardWrapper>
          <div style={ { fontSize: '1.2rem', fontWeight: '600' } } >Enter your username</div>
          <InputWrapper
            type="text"
            placeholder="Username"
            id='username'
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
              value="Start"
              onClick={handleStartQuiz}
              />
          </div>
        </CardWrapper>
    </BodyWrap>
  );
}

export default Home;
