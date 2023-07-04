import React  from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { Element } from "@craftjs/core";

export const Card = ({background, padding = 20}) => {
  return (
    <Container background={background} padding={padding}>
      <Element canvas id='text_elements' is="div" className="text-only">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <div className="buttons-only">
        <Button size="small" text="Learn more" variant="contained" color="primary" />
      </div>
    </Container>
  )
}