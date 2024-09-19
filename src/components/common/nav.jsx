import { Link } from "react-router-dom";

export default function Nav() {
  const types = [
    'Lamps',
    'Floor',
    'Ceiling',
    'Table',
    'Candles',
    'Decorative',
    'Flameless',
    'Celebratory'
  ];

  return (
    <nav>
      <div>
        {/* <Link to="/lamps">
          <h3>Lamps</h3>
        </Link>
        <Link to="/candles">
          <h3>Candles</h3>
        </Link>
        <Link to="/newsletter">
        <h3>NewsLetter</h3>
        </Link> */}
        {types.map((type) => (
          <Link to={`/${type.toLowerCase()}`} key={type}>
            <h3>{type}</h3>
          </Link>
        ))}
        <Link to="/newsletter">
          <h3>NewsLetter</h3>
        </Link>
      </div>
    </nav>
  );
}
