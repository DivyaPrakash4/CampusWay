package com.example.Nav.model;

import java.util.List;

public class Path {
    private List<String> path;
    private int totalDistance;

    public Path(List<String> path, int totalDistance) {
        this.path = path;
        this.totalDistance = totalDistance;
    }

    public List<String> getPath() {
        return path;
    }

    public int getTotalDistance() {
        return totalDistance;
    }
}

