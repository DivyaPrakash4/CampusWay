export const PathResult = ({ path, distance }) => (
  <div className="path-result">
    <h3>Shortest Path:</h3>
    <p>{path.join(" ➡️ ")}</p>
    <p>Total Distance: <strong>{distance}</strong></p>
  </div>
);
