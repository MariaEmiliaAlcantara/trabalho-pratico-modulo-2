import "./InvestmentItem.css";

const InvestmentItem = ({ data }) => {
  return (
    <div id="wrapper">
      <h1 id="title" className="text-center">
        {data.description}{" "}
      </h1>
      <h3
        id="rentabilidade"
        className={`text-center ${
          data.rentabilidadeAnual >= 0 ? "text-green-800" : "text-red-800"
        }
        `}
      >
        (Rentabilidade Anual: {data.rentabilidadeAnual}%)
      </h3>
      <table id="table" className="container mx-auto">
        <thead>
          <tr id="rowTitle">
            <th>Mês</th>
            <th>Saldo</th>
            <th>Rentabilidade</th>
          </tr>
        </thead>
        {data.reports.map((report) => (
          <tbody>
            <tr key={report.id}>
              <th>{`${report.month}/${report.year}`}</th>
              <th>R${report.value.toFixed(2)}</th>
              <th
                className={
                  report.rentabilidadeMensal >= 0
                    ? "text-green-800"
                    : "text-red-800"
                }
              >
                {report.rentabilidadeMensal}%
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default InvestmentItem;
