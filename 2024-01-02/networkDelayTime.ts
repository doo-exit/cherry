function networkDelayTime(times: number[][], n: number, k: number): number {
  let map = new Map<number, number[][]>();
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }

  for (let i = 0; i < times.length; i++) {
    let temp = times[i];
    let value = map.get(temp[0]);
    if (!value) continue;

    let newArr = new Array(2);
    newArr[0] = temp[1];
    newArr[1] = temp[2];

    value.push(newArr);
  }

  let distance = new Array(n + 1);
  let visited = new Array(n + 1).fill(-1);
  distance[0] = 0;
  distance[k] = 0;

  for (let i = 1; i < distance.length; i++) {
    if (i !== k) {
      distance[i] = Number.MAX_SAFE_INTEGER;
    }
  }

  const getMinNode = () => {
    let minNode = -1;
    for (let i = 1; i < visited.length; i++) {
      if (visited[i] !== -1) continue;
      if (minNode !== -1 && distance[i] > distance[minNode]) continue;

      minNode = i;
    }
    return minNode;
  };

  for (let i = 1; i < distance.length; i++) {
    let minNode = getMinNode();
    visited[minNode] = 1;

    let child = map.get(minNode);
    if (child) {
      for (let i = 0; i < child.length; i++) {
        const temp = child[i];
        if (distance[minNode] + temp[1] < distance[temp[0]]) {
          distance[temp[0]] = distance[minNode] + temp[1];
        }
      }
    }
  }

  let max = 0;
  for (let i = 1; i < distance.length; i++) {
    if (distance[i] > max) {
      max = distance[i];
    }
  }

  return max === Number.MAX_SAFE_INTEGER ? -1 : max;
}
