import React, { useState } from "react";

export function TaxCalculatorComponent(props) {
  const [annualIncome, setAnnualIncome] = useState("");
  const [tax, setTax] = useState(0);
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      setTax(calculateTax(parseFloat(annualIncome)));
  }

  function calculateTax (income) {

    /*
    Up to Rs 2.5 lakh	NIL
    Rs 2.5 lakh to Rs 5 lakh	10%
    Rs 5 lakh to Rs 10 lakh	20%
    Rs 10 lakh and above	30%
    */

    var tax = 0;
    if(income > 250000 && income <=500000){
      tax = (income - 250000)*10/100;
    }
    else if(income > 500000 && income <=1000000){
      tax = (25000 + ((income -500000))*20/100);
    }
    else if(income > 1000000){
      tax = (25000 + 100000) + ((income-1000000)*30/100);
    }

    return tax;
    
  }
  return (
    <form onSubmit={handleSubmit} className="container">
      <h1 className="title">Income Tax Calculator</h1>
      <div className="input-container"> 
        <label className="labels" htmlFor="annualIncome">
          Annual Income:
          <input
            type="text"
            value={annualIncome}
            onChange={e => setAnnualIncome(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      
      <div>
        <h3>Tax Value:</h3>
        <h3 className="total">{tax}</h3>
      </div>
      </div>
    </form>
  );
}