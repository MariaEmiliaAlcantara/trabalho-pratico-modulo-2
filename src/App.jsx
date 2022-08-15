import InvestmentItem from "./components/InvestmentItem/InvestmentItem";
import Header from "./components/Header/Header";
import api from "./services/api";
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [reports, setReports] = useState([]);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    api
      .get("/reports")
      .then((response) => {
        // console.log(response.data);
        setReports(response.data);
      })
      .catch(() => console.log("fail"));

    api
      .get("/investments")
      .then((response) => {
        // console.log(response.data);
        setInvestments(response.data);
      })
      .catch(() => console.log("fail"));
  }, []);

  function eachInvestment(reports, investments) {
    if (reports.length === 0 || investments.length === 0) {
      return;
    }
    let array = [];
    for (let investment of investments) {
      //reports.sort((a, b) => a.month - b.month);

      let investmentProcessed = { ...investment };
      let reportsProcessed = [];
      for (let i = 0; i < reports.length; i++) {
        if (investment.id === reports[i].investmentId) {
          reportsProcessed.push(reports[i]);
        }
      }

      reportsProcessed.sort((a, b) => a.month - b.month);

      let rentabilidadeAnual =
        ((reportsProcessed[reportsProcessed.length - 1].value -
          reportsProcessed[0].value) /
          reportsProcessed[0].value) *
        100;

      for (let i = 0; i < reportsProcessed.length; i++) {
        if (i === 0) {
          reportsProcessed[0].rentabilidadeMensal = 0;
          continue;
        }
        let rentabilidadeMensal =
          ((reportsProcessed[i].value - reportsProcessed[i - 1].value) /
            reportsProcessed[i - 1].value) *
          100;

        reportsProcessed[i].rentabilidadeMensal =
          rentabilidadeMensal.toFixed(2);
      }

      investmentProcessed.reports = reportsProcessed;
      investmentProcessed.rentabilidadeAnual = rentabilidadeAnual.toFixed(2);

      array.push(investmentProcessed);
    }
    return array;
  }

  // console.log("reports = ", reports);
  // console.log("investments = ", investments);
  const investmentArray = eachInvestment(reports, investments);
  console.log(investmentArray);

  return (
    <div>
      <Header />
      <div className="wrapperMain">
        {investmentArray &&
          investmentArray.map((item) => (
            <InvestmentItem key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
}
