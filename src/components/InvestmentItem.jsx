const InvestmentItem = ({ data }) => {
  return (
    <table className="container mx-auto p-10 m-5">
      <thead>
        {data.reports.map((report) => (
          <tr key={report.id}>
            <th>{`${report.month}/${report.year}`}</th>
            <th>{report.value.toFixed(2)}</th>
            <th>rentabilidade</th>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default InvestmentItem;
