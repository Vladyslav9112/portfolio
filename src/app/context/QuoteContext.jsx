"use client";
import { createContext, useContext, useState } from "react";

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
  const [quote, setQuote] = useState(null);
  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}
