const Countrie = () => (
  <div className="container">
    <div className="headline" />
    <div className="grid-container">
      <h1>Country</h1>
      <h2>Confirmed Cases</h2>
    </div>
  </div>
);

export const Detail = () => (
  <ul>
    <li className="c-details">Country: Germany</li>
    <li className="c-details">Deaths: 100</li>
    <li className="c-details">New Case: 40</li>
    <li className="c-details">Recover: 67</li>
  </ul>
);

export default Countrie;
