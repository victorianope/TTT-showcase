import { motion } from "framer-motion";

import {
  Center,
  ListProps,
  UnorderedList,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { Component, ComponentProps } from "../../base/fc";
import { Item } from "./item";
import { TerroristType } from "../../../types/";

interface ItemListProps extends ComponentProps {
  terroristFilteredList: TerroristType[];
}

export const ItemList: Component<ItemListProps> = (props) => {
  const { terroristFilteredList } = props;

  const backgroundColor = useColorModeValue("white", "#222");
  const width = useBreakpointValue({ base: "95%", lg: "70%", xl: "60%" });

  const MotionList = motion<ListProps>(UnorderedList);

  return (
    <Center>
      <MotionList
        marginTop={"25px"}
        width={width}
        display={"flex"}
        flexDirection={"column"}
        background={backgroundColor}
        padding={"20px"}
        borderRadius={"25px"}
        listStyleType={"none"}
        spacing={"20px"}
        layout
        initial={{ borderRadius: 25 }}
      >
        {terroristFilteredList.map((terroristItem, terroristId) => (
          <Item key={terroristId} terrorist={terroristItem} />
        ))}
      </MotionList>
    </Center>
  );
};
