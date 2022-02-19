import React, { FC } from "react";

interface ContainerProps {
  header: string;
}

const Container: FC<ContainerProps> = (props) => {
  return <>{props.children}</>;
};

export default Container;
