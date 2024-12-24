const currencySymbols = {
  usd: "$", // United States Dollar
  cad: "C$", // Canadian Dollar
  eur: "€", // Euro
  gbp: "£", // British Pound Sterling
  aud: "A$", // Australian Dollar
  chf: "Fr.", // Swiss Franc
  dkk: "kr.", // Danish Krone
  jpy: "¥", // Japanese Yen
  inr: "₹", // Indian Rupee
  cny: "¥", // Chinese Yuan
  sek: "kr", // Swedish Krona
  nok: "kr", // Norwegian Krone
  mxn: "$", // Mexican Peso
  brl: "R$", // Brazilian Real
  zar: "R", // South African Rand
  hkd: "HK$", // Hong Kong Dollar
  sgd: "S$", // Singapore Dollar
  nzd: "NZ$", // New Zealand Dollar
};

export const getUniqueCurrencies = (data) => {
  let uniqueCurrencies = new Set();
  data?.forEach((project) => {
    uniqueCurrencies.add(project.currency);
  });
  return uniqueCurrencies;
};

export const getCurrencySymbol = (currencySet, currencyCode) => {
  const code = currencyCode.toLowerCase();

  if (currencySet.has(code)) {
    return currencySymbols[code] || "";
  } else {
    return "";
  }
};
