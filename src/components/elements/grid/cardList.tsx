import { terroristList } from "../../../assets/database";

import { Box, UnorderedList } from "@chakra-ui/react";

import { Component, ComponentProps } from "../../base/fc";
import { Card } from "./card";

interface ListProps extends ComponentProps {
  selectedId?: string;
}

export const CardList: Component<ListProps> = (props) => {
  const { selectedId } = props;
  return (
    <UnorderedList
      listStyleType={"none"}
      padding={0}
      margin={0}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
      alignContent={"center"}
    >
      {terroristList.map((terroristItem, terroristId) => (
        <Card key={terroristId} terrorist={terroristItem} />
      ))}
    </UnorderedList>
  );
};
