import React, { FormEvent, useEffect, useState } from 'react';
import { useTour } from '@reactour/tour';

import {
  ButtonsContainer,
  FormContainer,
  HomeContainer,
} from '../modules/Home/styles/stylesHome';

const Home: React.FC = function () {
  const { setIsOpen } = useTour();
  const [colorButton, setColorButton] = useState<string>('#32cd32');
  const [hiddenImage, setHiddenImage] = useState<boolean>(false);

  const handleAlertMessage = () => {
    alert('You clicked in button');
  };

  const handleAlterationColor = () => {
    if (colorButton === '#32cd32') {
      setColorButton('#32cdff');
    } else {
      setColorButton('#32cd32');
    }
  };

  const onSubmitMessage = (event: FormEvent) => {
    event.preventDefault();
    alert('You send message');
  };

  const handleShowImage = () => setHiddenImage(!hiddenImage);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <HomeContainer>
      <ButtonsContainer className="buttons-first">
        <button
          className="buttons-first-three"
          type="button"
          onClick={handleAlertMessage}
        >
          Show alert
        </button>
        <button
          className="buttons-first-one"
          type="button"
          onClick={handleAlterationColor}
          style={{ background: `${colorButton}` }}
        >
          alteration color
        </button>
        <button
          className="buttons-first-two"
          type="button"
          onClick={handleShowImage}
        >
          show image
        </button>
      </ButtonsContainer>

      <form onSubmit={onSubmitMessage} className="form-first">
        <FormContainer>
          <input type="text" placeholder="Message" />
          <button type="submit">send message</button>
        </FormContainer>
      </form>

      <img
        src="https://st.depositphotos.com/1179847/4067/i/950/depositphotos_40676241-stock-photo-barbados.jpg"
        alt="mar"
        hidden={hiddenImage}
        className="image-first"
      />
    </HomeContainer>
  );
};

export default Home;
