import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  ont-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const Row = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[3]};
  padding-buttom: ${(props) => props.theme.space[3]};
`;

const open = styled(SvgXml)`
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RestaurantInfoCard = ({ retaurant = {} }) => {
  const {
    name = "retaurant",
    icon,
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
    address = "100 some random street",
    openingHours = true,
    rating = 4,
    isClosedTemporarily,
  } = retaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Row>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
            <open
          </Row>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
