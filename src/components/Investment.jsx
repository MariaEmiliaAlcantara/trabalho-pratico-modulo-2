const Investment = ({ children }) => {
  return (
    <>
      <table className="container mx-auto p-10 m-5">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Saldo</th>
            <th>Rentabilidade</th>
          </tr>
        </thead>
      </table>
      <div className="container mx-auto p-10 m-5">{children}</div>
    </>
  );
};

export default Investment;
