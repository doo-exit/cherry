function maxArea(heights: number[]): number {
    let answer = 0;

    const getVolume = (left: number, right: number) => {
        const width = right - left;
        const height = Math.min(heights[left], heights[right]);
        return width * height;
    };

    let leftIndex = 0,
        rightIndex = heights.length - 1;
  
    while (leftIndex < rightIndex) {
        answer = Math.max(answer, getVolume(leftIndex, rightIndex));
        const left = heights[leftIndex],
            right = heights[rightIndex];
        left < right ? leftIndex++ : rightIndex--;
    }

    return answer;
}
