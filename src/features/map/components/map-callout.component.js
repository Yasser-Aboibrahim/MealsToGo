import React from "react";
import styled, { Image, View } from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
