import React, { useState } from "react";
import Login from "./pages/Login";
import Survey from "./pages/Survey";
import { QuoteResponse } from "./pages/Quote/types";
import Quote from "./pages/Quote";

function App() {
  const [page, setPage] = useState<string>("login");
  const [quote, setQuote] = useState<QuoteResponse>();
  const handleSuccesfulLogin = () => {
    setPage("survey");
  };
  const handleApprovedQuote = (quote: QuoteResponse) => {
    setQuote(quote);
    setPage("quote");
  };
  return (
    <>
      {page === "login" && <Login onSuccesfulLogin={handleSuccesfulLogin} />}
      {page === "survey" && <Survey onApprovedQuote={handleApprovedQuote} />}
      {page === "quote" && <Quote quote={quote} />}
    </>
  );
}

export default App;
