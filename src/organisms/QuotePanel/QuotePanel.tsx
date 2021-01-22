import React from "react";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import PriceTag from "../../atoms/PriceTag";
import { ReactComponent as Selected } from "../../images/selected.svg";
import {
  ButtonWrapper,
  Feature,
  HeadingWrapper,
  PriceWrapper,
  Wrapper,
} from "./styledComponents";
import { IQuotePanel } from "./types";

const QuotePanel = ({
  title,
  price,
  features,
  monthly,
  selected,
  onSelect,
}: IQuotePanel) => {
  const getLabel = (): string => {
    if (monthly) return "monthly incl. taxes";
    return "yearly incl. taxes";
  };
  return (
    <Wrapper selected={selected}>
      <HeadingWrapper>
        <Heading
          variant="h1"
          text={title}
          color={selected ? "white" : undefined}
        />
      </HeadingWrapper>
      <PriceWrapper selected={selected}>
        <PriceTag
          amount={price.toFixed(2)}
          label={getLabel()}
          color={selected ? "white" : "#31cfda"}
        />
      </PriceWrapper>
      <ul>
        {features.map((feature, index) => (
          <Feature key={index} selected={selected}>
            {feature}
          </Feature>
        ))}
      </ul>
      <ButtonWrapper>
        <Button
          variant={selected ? "lightblue-selected" : "lightblue"}
          onClick={onSelect}
        >
          {selected && (
            <>
              <Selected />
              Plan Selected
            </>
          )}
          {!selected && <>Choose this plan</>}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default QuotePanel;
