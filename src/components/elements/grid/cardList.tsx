import { UnorderedList } from "@chakra-ui/react";

import { Component, ComponentProps } from "../../base/fc";
import { Card } from "./card";
import { TerroristType } from "../../../types/";

interface ListProps extends ComponentProps {
  terroristFilteredList: TerroristType[];
}

export const CardList: Component<ListProps> = (props) => {
  const { terroristFilteredList } = props;
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
      {terroristFilteredList.map((terroristItem, terroristId) => (
        <Card key={terroristId} terrorist={terroristItem} />
      ))}
    </UnorderedList>
  );
};
