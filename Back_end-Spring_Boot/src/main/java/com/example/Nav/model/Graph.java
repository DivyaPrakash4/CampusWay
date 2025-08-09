package com.example.Nav.model;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Graph {
    private Map<String, Map<String, Integer>> adjList = new HashMap<>();

    public void addEdge(String source, String dest, int weight) {
        adjList.computeIfAbsent(source, k -> new HashMap<>()).put(dest, weight);
        adjList.computeIfAbsent(dest, k -> new HashMap<>()).put(source, weight); // Undirected graph
    }

    public Map<String, Integer> getNeighbors(String node) {
        return adjList.getOrDefault(node, new HashMap<>());
    }

    public Set<String> getNodes() {
        return adjList.keySet();
    }
}

