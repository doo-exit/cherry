class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (
      this.heap[parentIdx] &&
      this.heap[index][1] < this.heap[parentIdx][1]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[index][1]) ||
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[index][1])
    ) {
      let smallerIdx = leftIdx;
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] < this.heap[smallerIdx][1]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

function solution(n, paths, gates, summits) {
    // ! constrains: 산봉우리의 번호가 제일 낮은 등산코스 선택
    summits.sort((a, b) => a - b);
    
    // 양방향 그래프 만들기 graph[from] = [to, weight]
    const graph = Array.from(Array(n + 1), () => []);
    
    for (const path of paths) {
        const [from, to, weight] = path;
        graph[from].push([to, weight]);
        graph[to].push([from, weight]);
    }
    
    // summit, gate 조회용
    const summitSet = new Set(summits);
    const gateSet = new Set(gates);
    
    // 우선순위 큐 다익스트라로 weight의 최댓값을 최소로 만드는 경로를 찾음
    // 출입구 > 산봉우리로 가는 편도만 구하면 됨
    const queue = new MinHeap();
    const intensity = Array(n + 1).fill(Infinity); // 기존 다익스트라로 따지면 dist
    
    for (const gate of gates) {
        queue.add([gate, 0]);
        intensity[gate] = 0;
    }
    
    while (queue.size()) {
        const [currNode, currWeight] = queue.poll();
        
        // 산봉우리면 pass
        if (summitSet.has(currNode))
            continue;
        
        // 이미 갱신된 최솟값이라면 pass
        if (intensity[currNode] < currWeight)
            continue;
        
        for (const [nextNode, nextWeight] of graph[currNode]) {
            // 출입구면 pass
            if (gateSet.has(nextNode))
                continue;
            
            // intensity 갱신
            const maxWeight = Math.max(currWeight, nextWeight);
            if (intensity[nextNode] > maxWeight) {
                intensity[nextNode] = maxWeight;
                queue.add([nextNode, maxWeight]);
            }
        }
    }
    
    let answer = [Infinity, Infinity];
    // 정렬된 summit
    for (const summit of summits) {
        if (intensity[summit] < answer[1]) {
            answer = [summit, intensity[summit]];
        }
    }
    
    return answer;
}
