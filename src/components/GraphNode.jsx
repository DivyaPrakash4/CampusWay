import PropTypes from 'prop-types';

export const GraphNode = ({ node, position, isInPath }) => {
  if (!position) return null;
  const initials = node.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div
      className={`node ${isInPath ? 'node-active' : ''}`}
      style={{ left: position.x, top: position.y }}
      title={node}
    >
      {initials}
    </div>
  );
};

GraphNode.propTypes = {
  node: PropTypes.string.isRequired,
  position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  isInPath: PropTypes.bool
};
