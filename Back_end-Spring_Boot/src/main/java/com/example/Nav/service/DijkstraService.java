package com.example.Nav.service;

import com.example.Nav.model.Graph;
import org.springframework.stereotype.Service;
import com.example.Nav.model.Path;


import java.util.*;

@Service
public class DijkstraService {

    public Path findShortestPathWithDistance(Graph graph, String start, String end) {
        Map<String, Integer> distance = new HashMap<>();
        Map<String, String> previous = new HashMap<>();
        PriorityQueue<String> pq = new PriorityQueue<>(Comparator.comparingInt(distance::get));

        for (String node : graph.getNodes()) {
            distance.put(node, Integer.MAX_VALUE);
            previous.put(node, null);
        }

        distance.put(start, 0);
        pq.add(start);

        while (!pq.isEmpty()) {
            String current = pq.poll();
            for (Map.Entry<String, Integer> neighbor : graph.getNeighbors(current).entrySet()) {
                int alt = distance.get(current) + neighbor.getValue();
                if (alt < distance.get(neighbor.getKey())) {
                    distance.put(neighbor.getKey(), alt);
                    previous.put(neighbor.getKey(), current);
                    pq.add(neighbor.getKey());
                }
            }
        }

        List<String> path = new ArrayList<>();
        for (String at = end; at != null; at = previous.get(at)) {
            path.add(at);
        }
        Collections.reverse(path);

        int totalDistance = distance.get(end);
        return new Path(path, totalDistance);
    }
}
