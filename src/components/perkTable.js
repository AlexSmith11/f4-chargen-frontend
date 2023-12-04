const PerkTable = (perks) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Perk Name</th>
          <th>SPECIAL rank required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {perks.perks.map((perk, index) => {
          return (
            <tr key={index}>
              <td>{perk.Name}</td>
              <td>{perk.SpecialRankRequirement}</td>
              <td>{perk.Description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PerkTable;
