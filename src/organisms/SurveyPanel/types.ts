import { IOption } from "../../atoms/Select/types";
import { IError } from "../../types/error.types";
import { GetQuoteDTO } from "../../pages/Quote/types";
export interface ISurveyPanel {
  brands: IOption[];
  errors?: IError[];
  onSubmit: (dto: GetQuoteDTO) => void;
}
