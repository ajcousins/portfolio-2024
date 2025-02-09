"use client"
import { useEffect, useRef } from "react"
import * as d3 from "d3";

/**
 * https://observablehq.com/@d3/disjoint-force-directed-graph/2
 * https://2019.wattenberger.com/blog/d3-force
 */

interface Node extends d3.SimulationNodeDatum {
  id: number;
}

const data = {
  nodes: [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]
}

export default function Sketch() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = 928;
    const height = 680;

    const nodes: Node[] = data.nodes.map(d => ({ ...d }));

    const simulation = d3.forceSimulation<Node>(nodes)
      .force("charge", d3.forceManyBody().strength(-50))

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 45)
      .attr("fill", () => 'white');

    simulation.on("tick", () => {
      node
        .attr("cx", d => d.x!)
        .attr("cy", d => d.y!);
    });
  }, [])

  return (
    <svg
      ref={ref}
    />
  )
}
