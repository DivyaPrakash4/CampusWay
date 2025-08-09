import './App.css';
import { GraphNode } from './components/GraphNode';
import { NodeSelector } from './components/NodeSelector';
import { PathResult } from './components/PathResult';
import { useNavigation } from './components/useNavigation';
import { GraphLines } from './components/GraphLines';

const NODE_POSITIONS = {
  "Gate": { x: 50, y: 200 },
  "Ground": { x: 200, y: 350 },
  "Dean Off": { x: 250, y: 100 },
  "Library": { x: 500, y: 300 },
  "Lab": { x: 450, y: 100 },
  "Main Building": { x: 350, y: 230 }
};

export default function App() {
  const {
    nodes, start, setStart,
    end, setEnd, path, distance,
    loading, error, findPath
  } = useNavigation();

  return (
    <div className="container">
      <h2>🏫 College Navigation System</h2>

      <div className="selectors">
        <NodeSelector label="Start" value={start} nodes={nodes} onChange={setStart} disabled={loading} />
        <NodeSelector label="End" value={end} nodes={nodes} onChange={setEnd} disabled={loading} />
        <button onClick={findPath} disabled={!start || !end || loading}>
          {loading ? 'Finding Path...' : 'Find Path'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="map-area">
        <GraphLines path={path} positions={NODE_POSITIONS} />
        {nodes.map(node => (
          <GraphNode key={node} node={node} position={NODE_POSITIONS[node]} isInPath={path.includes(node)} />
        ))}
      </div>

      {path.length > 1 && distance !== null && <PathResult path={path} distance={distance} />}
    </div>
  );
}
