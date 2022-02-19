import { motion } from "framer-motion";

import { UnorderedList } from "@chakra-ui/react";

import { terroristList } from "../../../assets/database";
import { Component, ComponentProps } from "../../base/fc";
import { Item } from "./item";

interface ListProps extends ComponentProps {
  selectedId?: string;
}

export const ItemList: Component<ListProps> = (props) => {
  const { selectedId } = props;

  const MotionList = motion<ListProps>(UnorderedList);

  return (
    <MotionList
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        background: "white",
        padding: "20px",
        borderRadius: "25px",
        listStyle: "none",
      }}
      layout
      initial={{ borderRadius: 25 }}
    >
      {terroristList.map((terroristItem, terroristId) => (
        <Item key={terroristId} terrorist={terroristItem} />
      ))}
    </MotionList>
  );
};
