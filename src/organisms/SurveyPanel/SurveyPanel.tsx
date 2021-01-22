import React from "react";
import useInputValue from "../../hooks/useInputValue";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import Button from "../../atoms/Button";
import { ISurveyPanel } from "./types";
import {
  ButtonWrapper,
  GeneralError,
  PriceWrapper,
  Wrapper,
} from "./styledComponents";

const SurveyPanel = ({ brands, errors, onSubmit }: ISurveyPanel) => {
  const age = useInputValue<number>(0);
  const brand = useInputValue<string>("");
  const purchasePrice = useInputValue<number>(0);

  const handleSubmit = () => {
    onSubmit({
      carId: brand.value,
      purchasePrice: purchasePrice.value,
      age: age.value,
    });
  };

  const isDisabled = () => {
    if (age.value > 0 && purchasePrice.value > 0 && brand.value !== "")
      return false;
    return true;
  };

  const getError = (key: string): string => {
    const error = errors?.find((err) => err.key === key);
    if (error) return error.message!;
    return "";
  };
  return (
    <Wrapper>
      <Input
        name="age"
        label="Age of the driver"
        type="number"
        variant="box"
        error={getError("age")}
        {...age}
      />
      <Select
        name="brand"
        label="Car"
        {...brand}
        options={brands}
        error={getError("brand")}
      />
      <PriceWrapper>
        <Input
          name="purchasePrice"
          label="Purchase Price"
          type="number"
          step="0.01"
          variant="box"
          error={getError("purchasePrice")}
          backLabel="€"
          {...purchasePrice}
        />
      </PriceWrapper>
      {getError("general") && (
        <GeneralError>{getError("general")}</GeneralError>
      )}
      <ButtonWrapper>
        <Button
          variant="lightblue"
          disabled={isDisabled()}
          onClick={handleSubmit}
        >
          Get a price
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SurveyPanel;
