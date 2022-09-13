import styled from 'styled-components';
import { Field } from 'formik';

export const InputFormBox = styled.div`
padding: 10px;
margin: 10px;
width: 380px;
border: 2px solid black;
border-radius: 15px;
background-color: blue;
`
export const InputItem = styled(Field)`
height: 36px;
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 10px;
:invalid {
  border: 2px dashed red;
}
:invalid:required {
  background-image: linear-gradient(to right, pink, white);
}

`