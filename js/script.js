function convert() {
    const direction = document.getElementById("direction").value;
    const amount = Number(document.getElementById("amount").value);
    const rate = Number(document.getElementById("rate").value);
    const result = document.getElementById("result");
  
    if (amount <= 0 || rate <= 0) {
      result.textContent = "Podaj poprawne dane.";
      return;
    }
  
    let converted;
  
    if (direction === "eurToPln") {
      converted = amount * rate;
      result.textContent = `Wynik: ${converted.toFixed(2)} PLN`;
    } else {
      converted = amount / rate;
      result.textContent = `Wynik: ${converted.toFixed(2)} €`;
    }
  }