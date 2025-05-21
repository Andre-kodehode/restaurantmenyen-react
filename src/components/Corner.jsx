import corners from "../data/corners";

export function Corner() {
  return corners.map((corner) => (
    <div className={`corner ${corner.positionClass}`}>
      <img src={corner.src} alt={corner.altText} />
    </div>
  ));
}

// {
//   numbers.map((number, index) => <p key={index}>{number}</p>);
// }
