import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import { Box, BoxProps, Heading, Image, Text } from "@chakra-ui/react";

import { terroristList } from "../../assets/database";
import { Component, ComponentProps } from "../base/fc";

interface ItemDetailsProps extends ComponentProps {
  terroristId: string;
}

export const ItemDetails: Component<ItemDetailsProps> = (props) => {
  const { terroristId } = props;
  const MotionBox = motion<BoxProps>(Box);

  const terrorist = terroristList.find((item) => item.id === terroristId);
  if (!terrorist) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Link to="/">
        <MotionBox
          zIndex={1}
          position={"fixed"}
          background={"rgba(0,0,0,0.8)"}
          willChange={"opacity"}
          top={0}
          bottom={0}
          left={"50%"}
          transform={"translateX(-50%)"}
          width={"100%"}
          maxWidth={"990px"}
          // Motion Props
          // transition={{ duration: 0.2, delay: 0.15 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          style={{ pointerEvents: "auto" }}
          className="overlay"
        />
        <Box
          position={"fixed"}
          top={0}
          left={0}
          right={0}
          zIndex={1}
          overflow={"hidden"}
          padding={"40px 0"}
        >
          <MotionBox
            pointerEvents={"auto"}
            position={"relative"}
            borderRadius={"20px"}
            background={"#1c1c1e"}
            overflow={"hidden"}
            width={"100%"}
            margin={"0 auto"}
          >
            <MotionBox
              position={"absolute"}
              top={0}
              left={0}
              overflow={"hidden"}
              height={"420px"}
              width={"100vw"}
            >
              <Image src={terrorist.image} alt="" />
            </MotionBox>
            <MotionBox
              position={"absolute"}
              top={"15px"}
              left={"15px"}
              maxWidth={"300px"}
            >
              <Text
                textColor={"#fff"}
                fontSize={"14px"}
                textTransform={"uppercase"}
              >
                {terrorist.group}
              </Text>
              <Heading color={"#fff"} margin={"8px 0"}>
                {terrorist.name}
              </Heading>
            </MotionBox>
            <MotionBox
              padding={"460px 35px 35px 35px"}
              maxWidth={"700px"}
              width={"90vw"}
              lineHeight={"28px"}
              color={"#fff"}
              animate
            >
              <Box width={"100%"} marginTop={"12px"} paddingY={"10px"}>
                {terrorist.description.map((item, itemId) => {
                  return (
                    <Text key={itemId} marginX={"18px"} paddingY={"4px"}>
                      {item}
                    </Text>
                  );
                })}
              </Box>
            </MotionBox>
          </MotionBox>
        </Box>
      </Link>
    </>
  );
};
