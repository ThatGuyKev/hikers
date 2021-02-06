import React from 'react';
import {View, Image} from 'react-native';
import {
  CardContainer,
  TitleWrapper,
  Title,
  ImageWrapper,
  DescWrapper,
  Desc,
  DiffWrapper,
  Difficulty,
  DurWrapper,
  Duration,
  DetailWrapper,
  ContentWrapper,
} from './RouteCard.style';

type Route = {
  id: string;
  title: string;
  image: any;
  desc: string;
  duration: number;
  difficulty: 'Hard' | 'Medium' | 'Easy';
};
type RouteCardProps = {
  route: Route;
};
const RouteCard: React.FC<RouteCardProps> = ({route}) => {
  return (
    <CardContainer key={route.id}>
      <ImageWrapper>
        <Image style={{width: '100%', height: '100%'}} source={route.image} />
      </ImageWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Title>{route.title}</Title>
        </TitleWrapper>
        <DetailWrapper>
          <DescWrapper>
            <Desc>{route.desc}</Desc>
          </DescWrapper>
          <View
            style={{
              // backgroundColor: 'red',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              padding: 10,
              flexBasis: 80,
            }}>
            <DurWrapper>
              <Duration>{route.duration} hrs</Duration>
            </DurWrapper>
            <DiffWrapper>
              <Difficulty color={route.difficulty}>
                {route.difficulty}
              </Difficulty>
            </DiffWrapper>
          </View>
        </DetailWrapper>
      </ContentWrapper>
    </CardContainer>
  );
};

export default RouteCard;
