import React from 'react';
import {ButtonWrapper} from './FloaterButton.style';

import {Platform} from 'react-native';

type FloaterButtonProps = {bgColor?: string; onPress: () => void};

const FloaterButton: React.FC<FloaterButtonProps> = ({
  bgColor,
  onPress: onButtonPress,
  children,
}) => {
  return (
    <ButtonWrapper
      onPress={onButtonPress}
      platform={Platform.OS}
      color={{bgColor}}>
      {children}
    </ButtonWrapper>
  );
};

export default FloaterButton;
