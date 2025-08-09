package com.example.Nav.controller;

import com.example.Nav.model.Graph;
import com.example.Nav.model.Path;
import com.example.Nav.service.DijkstraService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/navigation")
@CrossOrigin(origins = "*")
public class NavigationController {

    private final DijkstraService dijkstraService;
    private final Graph graph;

    public NavigationController(DijkstraService dijkstraService) {
        this.dijkstraService = dijkstraService;
        this.graph = new Graph();

        // Define campus map edges
        graph.addEdge("Lab", "Dean Off", 12);
        graph.addEdge("Lab", "Main Building", 4);
        graph.addEdge("Dean Off", "Main Building", 8);
        graph.addEdge("Dean Off", "Ground", 7);
        graph.addEdge("Main Building", "Ground", 3);
        graph.addEdge("Ground", "Library", 7);
        graph.addEdge("Library", "Gate", 20);
        graph.addEdge("Ground", "Lab", 5);
        graph.addEdge("Main Building", "Gate", 9);

    }

    @GetMapping("/path")
    public Path getShortestPath(@RequestParam String start, @RequestParam String end) {
        return dijkstraService.findShortestPathWithDistance(graph, start, end);
    }

    @GetMapping("/nodes")
    public Set<String> getAllNodes() {
        return graph.getNodes();
    }
}
