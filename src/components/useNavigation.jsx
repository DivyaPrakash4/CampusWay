import { useState, useEffect } from 'react';
import axios from 'axios';

export const useNavigation = () => {
  const [nodes, setNodes] = useState([]);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/navigation/nodes')
      .then(res => setNodes(res.data))
      .catch(err => {
        setError('Failed to load nodes.');
        console.error(err);
      });
  }, []);

  const findPath = async () => {
    if (!start || !end) return;
    setLoading(true); setError(null);
    try {
      const res = await axios.get(`http://localhost:8080/api/navigation/path?start=${start}&end=${end}`);
      setPath(res.data.path);
      setDistance(res.data.totalDistance);
    } catch (err) {
      setError('Failed to find path.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { nodes, start, setStart, end, setEnd, path, distance, loading, error, findPath };
};
