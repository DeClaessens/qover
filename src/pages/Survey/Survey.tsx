import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import SurveyPanel from "../../organisms/SurveyPanel";
import { IOption } from "../../atoms/Select/types";
import { IError } from "../../types/error.types";
import { QuoteResponse, GetQuoteDTO } from "../Quote/types";
import { ICarBrands, ISurvey } from "./types";
import { SurveyWrapper, Wrapper } from "./styledComponents";

const Survey = ({ onApprovedQuote }: ISurvey) => {
  const [brands, setBrands] = useState<IOption[]>([]);
  const [errors, setErrors] = useState<IError[]>([]);

  useEffect(() => {
    axios.get<ICarBrands[]>("http://localhost:4000/cars").then((response) => {
      setBrands(
        response.data.map((brand) => ({
          label: brand.brand,
          value: brand._id,
        }))
      );
    });
  }, []);

  const handleSubmit = async ({ carId, age, purchasePrice }: GetQuoteDTO) => {
    try {
      const response = await axios.post<QuoteResponse>(
        "http://localhost:4000/quotes/getQuote",
        { params: { carId, age, purchasePrice } }
      );
      onApprovedQuote(response.data);
    } catch (err) {
      if (err?.response?.data?.error) {
        setErrors(err.response.data.error);
      }
    }
  };
  return (
    <MainLayout>
      <Wrapper>
        <SurveyWrapper>
          <SurveyPanel
            brands={brands}
            onSubmit={handleSubmit}
            errors={errors}
          />
        </SurveyWrapper>
      </Wrapper>
    </MainLayout>
  );
};

export default Survey;
