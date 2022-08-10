const InvestmentItem = ({ data }) => {
  return (
    <>
      <h1 className="text-center m-2">{data.description} </h1>
      <h3
        className={`text-center m-2 ${
          data.rentabilidadeAnual >= 0 ? "text-green-800" : "text-red-800"
        }
        `}
      >
        (Rentabilidade Anual: {data.rentabilidadeAnual}%)
      </h3>
      <table className="container mx-auto p-10 mb-5 text-sm text-base">
        <thead>
          <tr>
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
    </>
  );
};

export default InvestmentItem;
