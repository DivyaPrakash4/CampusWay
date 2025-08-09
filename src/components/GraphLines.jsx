import PropTypes from 'prop-types';

export const GraphLines = ({ path = [], positions = {} }) => {
  if (!Array.isArray(path) || path.length < 2) return null;

  const lines = path.slice(0, -1).map((fromNode, i) => {
    const toNode = path[i + 1];
    const from = positions[fromNode];
    const to = positions[toNode];
    if (!from || !to) return null;

    return (
      <line
        key={`line-${fromNode}-${toNode}`}
        x1={from.x + 25}
        y1={from.y + 25}
        x2={to.x + 25}
        y2={to.y + 25}
        stroke="#28a745"
        strokeWidth="4"
        strokeDasharray={i === 0 ? "0" : "5,5"}
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg
      className="line-canvas"
      width="100%" height="100%"
      viewBox="0 0 100% 100%"
      preserveAspectRatio="none"
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible' }}
    >
      {lines}
    </svg>
  );
};

GraphLines.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string),
  positions: PropTypes.objectOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }))
};
