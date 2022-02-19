import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  Box,
  BoxProps,
  Grid,
  GridItem,
  Heading,
  ListItem,
  ListItemProps,
  Text,
} from "@chakra-ui/react";

import { TerroristType } from "../../../types";
import { Component, ComponentProps } from "../../base/fc";
import { getRoleColor } from "../../../utils/getRoleColor";

interface ItemProps extends ComponentProps {
  terrorist: TerroristType;
}

export const Item: Component<ItemProps> = (props) => {
  const { terrorist } = props;

  const [isOpen, setIsOpen] = useState(false);

  const MotionBox = motion<BoxProps>(Box);
  const MotionLi = motion<ListItemProps>(ListItem);

  return (
    <MotionLi
      style={{
        listStyle: "none",
        backgroundColor: "rgba(214,214,214,0.5)",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        overflow: "hidden",
        cursor: "pointer",
        borderWidth: "3px",
        borderColor: `${getRoleColor(terrorist.group)}`,
      }}
      layout
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      initial={{ borderRadius: 10 }}
    >
      <Grid templateColumns={"repeat(1, 5fr)"}>
        <GridItem colSpan={1}>
          <MotionBox
            width={"80px"}
            height={"80px"}
            borderRadius={"20px"}
            layout
          >
            <img src={`images/${terrorist.image}`} alt="" />
          </MotionBox>
        </GridItem>
        <GridItem colStart={2} colEnd={6}>
          <Text fontSize={"12px"} textTransform={"uppercase"}>
            {terrorist.group}
          </Text>
          <Heading fontSize={"36px"}>{terrorist.name}</Heading>
        </GridItem>
      </Grid>

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box
              width={"100%"}
              backgroundColor={"#BBB"}
              borderRadius={"15px"}
              marginTop={"12px"}
              paddingY={"10px"}
            >
              {terrorist.description.map((item, itemId) => {
                return (
                  <Text key={itemId} marginX={"18px"} paddingY={"4px"}>
                    {item}
                  </Text>
                );
              })}
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionLi>
  );
};
