import PropTypes from 'prop-types';

export const NodeSelector = ({ label, value, nodes, onChange, disabled }) => (
  <select onChange={e => onChange(e.target.value)} value={value} disabled={disabled}>
    <option value="" disabled>Select {label}</option>
    {nodes.map(n => <option key={n} value={n}>{n}</option>)}
  </select>
);

NodeSelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  nodes: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
