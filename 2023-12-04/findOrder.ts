function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph = new Map<number, Array<number>>();
    const count = new Array(numCourses).fill(0);

    for (const prerequisite of prerequisites) {
        const [course, required] = prerequisite;

        graph.has(required)
            ? graph.get(required).push(course)
            : graph.set(required, [course]);
        
        count[course] = count[course] + 1;
    }

    const checked = new Array<boolean>(numCourses).fill(false);

    const isAble = (start: number) => {
        const visited = new Map<number, boolean>();
        let able = true;

        const traversal = (curr: number, startFrom: number) => {
            if (checked[curr]) return;
            if (!able) return;

            if (visited.get(curr)) return;
            visited.set(curr, true);

            const courses = graph.get(curr);
            if (!courses) return;

            for (let i = 0; i < courses.length; i += 1) {
                const next = courses[i];

                if (next === startFrom) {
                    able = false;
                    return;
                }
                
                traversal(courses[i], startFrom);
            }
        }
        
        traversal(start, start);
        return able;
    };

    for (let i = 0; i < numCourses; i += 1) {
        if (checked[i] = true && !isAble(i)) {
            return [];
        }
    }

    // 여기부터 추가
    const answer = [];
    const solve = () => {
        const checked = new Array<boolean>(numCourses).fill(false);

        const bfs = (start: number) => {
            const queue = new Array();
            queue.push(start);

            while(queue.length) {
                const front = queue.shift();
                if (count[front]) continue;

                answer.push(front);
                checked[front] = true;

                const courses = graph.get(front);
                if (!courses) return;

                for (const next of courses) {
                    count[next] = count[next] - 1;
                    if (count[next] === 0) {
                        queue.push(next);
                    }
                }
            }
        };

        while (!checked.every(checked => checked)) {
            count.forEach((count, course) => {
                if (count === 0 && !checked[course]) {
                    bfs(course);
                }
            });
        }
    };

    solve();
    return answer;
};
