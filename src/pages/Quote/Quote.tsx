import React, { useState } from "react";
import QuotePanel from "../../organisms/QuotePanel";
import Toggle from "../../atoms/Toggle";
import Heading from "../../atoms/Heading";
import { IQuote } from "./types";
import {
  Background,
  FrequencyLabel,
  FrequencyWrapper,
  OptionWrapper,
  QuoteWrapper,
} from "./styledComponents";

const GlobalFeatures = [
  <span>
    <b>Maximum duration travel</b> of <b>180 days</b>
  </span>,
  <span>
    <b>Medical expenses reimbursement</b> up to <b>3.000.000 €</b>
  </span>,
  <span>
    <b>Personal assistance abroad</b> up to <b>10.000 €</b>
  </span>,
  <span>
    <b>Travel assistance abroad</b> up to <b>2.500 €</b> per insured per travel
  </span>,
  <span>
    <b>Coverage duration: 1 year</b>
  </span>,
];

const UniverseFeatures = [
  <span>
    <b>Maximum duration travel</b> of <b>90 days</b>
  </span>,
  <span>
    <b>Medical expenses reimbursement</b> up to <b>1.000.000 €</b>
  </span>,
  <span>
    <b>Personal assistance abroad</b> up to <b>5.000 €</b>
  </span>,
  <span>
    <b>Travel assistance abroad</b> up to <b>1.000 €</b> per insured per travel
  </span>,
  <span>
    <b>Coverage duration: 1 year</b>
  </span>,
];

const Quote = ({ quote }: IQuote) => {
  const [selectedQuote, setSelectedQuote] = useState<number>();
  const [monthly, setMonthly] = useState<boolean>(false);

  const handleToggleMonthly = () => {
    setMonthly(!monthly);
  };
  if (!quote) return null;

  return (
    <Background>
      <Heading variant="title" color="white" text="Select a plan" />
      <FrequencyWrapper>
        <FrequencyLabel selected={monthly}>pay monthly</FrequencyLabel>
        <Toggle active={!monthly} onToggle={handleToggleMonthly} />
        <FrequencyLabel selected={!monthly}>pay yearly</FrequencyLabel>
      </FrequencyWrapper>

      <OptionWrapper>
        <QuoteWrapper>
          <QuotePanel
            title="Global"
            price={
              monthly ? quote.yearlyPrice.global / 12 : quote.yearlyPrice.global
            }
            features={GlobalFeatures}
            onSelect={() => setSelectedQuote(1)}
            selected={selectedQuote === 1}
            monthly={monthly}
          />
        </QuoteWrapper>
        <QuoteWrapper>
          <QuotePanel
            title="Universe"
            price={
              monthly
                ? quote.yearlyPrice.universal / 12
                : quote.yearlyPrice.universal
            }
            features={UniverseFeatures}
            onSelect={() => setSelectedQuote(2)}
            selected={selectedQuote === 2}
            monthly={monthly}
          />
        </QuoteWrapper>
      </OptionWrapper>
    </Background>
  );
};

export default Quote;
