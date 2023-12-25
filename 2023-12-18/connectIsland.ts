let bridge = {};

function findParent(node) {
  if (bridge[node] === node) {
    return node;
  } else {
    return findParent(bridge[node]);
  }
}

function union(info) {
  const [a, b, cost] = info;

  let aParent = findParent(a);
  let bParent = findParent(b);

  if (aParent === bParent) {
    return -1;
  } else {
    if (aParent > bParent) {
      bridge[aParent] = bParent;
    } else {
      bridge[aParent] = bParent;
    }
  }
  return cost;
}

function solution(n, costs) {
  var answer = 0;

  costs.sort(function (a, b) {
    return a[2] - b[2];
  });

  for (let i = 0; i < n; i++) {
    bridge[i] = i;
  }

  costs.forEach((cost) => {
    let unionCost = union(cost);
    if (unionCost !== -1) {
      answer += unionCost;
    }
  });

  return answer;
}
