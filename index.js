const countries = [
  { code: "", flag: "" },
  { code: "AZN", flag: "https://flagcdn.com/48x36/az.png" },
  { code: "AED", flag: "https://flagcdn.com/48x36/ae.png" },
  { code: "ARS", flag: "https://flagcdn.com/48x36/ar.png" },
  { code: "USD", flag: "https://flagcdn.com/48x36/us.png" },
  { code: "EUR", flag: "https://flagcdn.com/48x36/eu.png" },
  { code: "GBP", flag: "https://flagcdn.com/48x36/gb.png" },
  { code: "JPY", flag: "https://flagcdn.com/48x36/jp.png" },
  { code: "CNY", flag: "https://flagcdn.com/48x36/cn.png" },
  { code: "CAD", flag: "https://flagcdn.com/48x36/ca.png" },
  { code: "AUD", flag: "https://flagcdn.com/48x36/au.png" },
  { code: "CHF", flag: "https://flagcdn.com/48x36/ch.png" },
  { code: "INR", flag: "https://flagcdn.com/48x36/in.png" },
  { code: "RUB", flag: "https://flagcdn.com/48x36/ru.png" },
  { code: "BRL", flag: "https://flagcdn.com/48x36/br.png" },
  { code: "TRY", flag: "https://flagcdn.com/48x36/tr.png" },
  { code: "ZAR", flag: "https://flagcdn.com/48x36/za.png" },
  { code: "MXN", flag: "https://flagcdn.com/48x36/mx.png" },
  { code: "SGD", flag: "https://flagcdn.com/48x36/sg.png" },
  { code: "HKD", flag: "https://flagcdn.com/48x36/hk.png" },
  { code: "NZD", flag: "https://flagcdn.com/48x36/nz.png" },
  { code: "SEK", flag: "https://flagcdn.com/48x36/se.png" },
  { code: "KRW", flag: "https://flagcdn.com/48x36/kr.png" },
  { code: "NOK", flag: "https://flagcdn.com/48x36/no.png" },
  { code: "TRY", flag: "https://flagcdn.com/48x36/tr.png" },
  { code: "DKK", flag: "https://flagcdn.com/48x36/dk.png" },
  { code: "PLN", flag: "https://flagcdn.com/48x36/pl.png" },
  { code: "HUF", flag: "https://flagcdn.com/48x36/hu.png" },
  { code: "CZK", flag: "https://flagcdn.com/48x36/cz.png" },
  { code: "ILS", flag: "https://flagcdn.com/48x36/il.png" },
  { code: "PHP", flag: "https://flagcdn.com/48x36/ph.png" },
  { code: "THB", flag: "https://flagcdn.com/48x36/th.png" },
  { code: "TWD", flag: "https://flagcdn.com/48x36/tw.png" },
  { code: "EGP", flag: "https://flagcdn.com/48x36/eg.png" },
  { code: "MYR", flag: "https://flagcdn.com/48x36/my.png" },
  { code: "IDR", flag: "https://flagcdn.com/48x36/id.png" },
  { code: "CLP", flag: "https://flagcdn.com/48x36/cl.png" },
  { code: "PKR", flag: "https://flagcdn.com/48x36/pk.png" },
  { code: "SAR", flag: "https://flagcdn.com/48x36/sa.png" },
  { code: "VND", flag: "https://flagcdn.com/48x36/vn.png" },
  { code: "NGN", flag: "https://flagcdn.com/48x36/ng.png" },
  { code: "IQD", flag: "https://flagcdn.com/48x36/iq.png" },
  { code: "KWD", flag: "https://flagcdn.com/48x36/kw.png" },
  { code: "COP", flag: "https://flagcdn.com/48x36/co.png" },
  { code: "OMR", flag: "https://flagcdn.com/48x36/om.png" },
  { code: "QAR", flag: "https://flagcdn.com/48x36/qa.png" },
  { code: "BDT", flag: "https://flagcdn.com/48x36/bd.png" },
  { code: "HNL", flag: "https://flagcdn.com/48x36/hn.png" },
];

// Seçenekleri doldur
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const imgFlag = document.getElementById("imgFlag");
const imgFlagTo = document.getElementById("imgFlagTo");
const submit = document.getElementById("submit");
const amountInput = document.getElementById("amount");
const totalDisplay = document.getElementById("total");
const timestampDisplay = document.getElementById("timestamp");

countries.forEach((country) => {
  const fromOption = document.createElement("option");
  fromOption.value = country.code;
  fromOption.textContent = country.code;
  fromSelect.appendChild(fromOption.cloneNode(true));

  const toOption = document.createElement("option");
  toOption.value = country.code;
  toOption.textContent = country.code;
  toSelect.appendChild(toOption.cloneNode(true));
});

// change flag start
fromSelect.addEventListener("change", () => {
  imgSrc = countries.find((oneFind) => oneFind.code === fromSelect.value);
  imgFlag.src = imgSrc.flag;
});
toSelect.addEventListener("change", () => {
  imgSrc = countries.find((oneFind) => oneFind.code === toSelect.value);
  imgFlagTo.src = imgSrc.flag;
});
// change flag end

// submit start
submit.addEventListener("click", async (event) => {
  event.preventDefault();

  if (fromSelect.value !== "" && toSelect.value !== "") {
    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = amountInput.value;
    const url = `https://currency-converter241.p.rapidapi.com/convert?amount=${amount}&from=${from}&to=${to}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d1b57172e2msh168e253abda314ap147cbejsn9f4b356f62e5",
        "X-RapidAPI-Host": "currency-converter241.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      totalDisplay.textContent = ` Amount: ${result.total.toFixed(2)} ${
        toSelect.value
      }`;
      timestampDisplay.textContent = ` Time: ${new Date(
        result.timestamp * 1000
      ).toLocaleString()}`;
    } catch (error) {
      console.error(error);
      totalDisplay.textContent = "An error occurred. Please try again later.";
      timestampDisplay.textContent = "";
    }
  } else {
    alert("pls enter from and to valutes");
  }
});
// submit end
