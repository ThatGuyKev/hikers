import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  background-color: ${({color}) => (color == 'primary' ? 'blue' : 'green')};
  border-radius: 100;
  position: absolute;
  right: 5%;
  bottom: 5%;
  align-items: center;
  justify-content: center;

  ${({platform}) =>
    platform == 'ios'
      ? 'shadow-opacity: 0.8; shadow-color: #555;'
      : 'elevation:2'}
`;
