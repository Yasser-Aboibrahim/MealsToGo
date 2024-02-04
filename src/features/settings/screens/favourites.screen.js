import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsList } from "../../restaurants/components/restaurants.list";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <RestaurantsList navigation={navigation} restaurants={favourites} />
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
