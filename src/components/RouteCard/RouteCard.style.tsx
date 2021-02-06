import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: #f5f5f5;
  margin-bottom: 30;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  flex-direction: row;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;

  font-weight: 600;
`;

export const ImageWrapper = styled.View`
  width: 100;
  height: 100;
  margin-right: 10;
  border-radius: 5px;
  overflow: hidden;
`;

export const ContentWrapper = styled.View`
  flex: 1;
`;
export const DetailWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
`;
export const DescWrapper = styled.View`
  flex: 1;
`;

export const Desc = styled.Text``;

export const DiffWrapper = styled.View``;

type DifficultyProps = {color: string};
export const Difficulty = styled.Text<DifficultyProps>`
  font-weight: 700;
  color: ${({color}) =>
    color == 'Hard' ? 'red' : color == 'Medium' ? 'goldenrod' : 'green'};
`;

export const DurWrapper = styled.View``;

export const Duration = styled.Text``;
