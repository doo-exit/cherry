function findMinArrowShots(points: number[][]): number {
  let answer = 0;
  let end = -Infinity;

  points.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < points.length; i += 1) {
    const [x1, x2] = points[i];

    if (x1 > end) {
      end = x2;
      answer += 1;
    }
  }

  return answer;
}
