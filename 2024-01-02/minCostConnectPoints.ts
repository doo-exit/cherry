class UnionFind {
  private nodes: Map<number, number> = new Map();

  constructor(num: number) {
    for (let i = 0; i < num; i++) {
      this.nodes.set(i, i);
    }
  }

  union(nodeA: number, nodeB: number): boolean {
    const aParent = this.find(nodeA);
    const bParent = this.find(nodeB);

    if (aParent === bParent) {
      return false;
    }

    this.nodes.set(aParent, bParent);
    return true;
  }

  find(node: number): number {
    const currNode = this.nodes.get(node);

    if (currNode === node) {
      return node;
    }

    if (!currNode) return -1;

    return this.find(currNode);
  }
}

function minCostConnectPoints(points: [number, number][]): number {
  const n = points.length;
  const edges: { from: number; to: number; cost: number }[] = [];

  for (let from = 0; from < n; from++) {
    for (let to = from; to < n; to++) {
      edges.push({
        from,
        to,
        cost:
          Math.abs(points[from][0] - points[to][0]) +
          Math.abs(points[from][1] - points[to][1]),
      });
    }
  }

  edges.sort((a, b) => a.cost - b.cost);

  let totalCost = 0;
  let unionFind = new UnionFind(n);

  for (const { from, to, cost } of edges) {
    if (unionFind.union(from, to)) {
      totalCost += cost;
    }
  }

  return totalCost;
}
