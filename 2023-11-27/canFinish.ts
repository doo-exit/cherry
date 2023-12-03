function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = new Map<number, Array<number>>();
    
    for (const prerequisite of prerequisites) {
        const [course, required] = prerequisite;

        graph.has(required)
            ? graph.get(required).push(course)
            : graph.set(required, [course]);
    }

    const solve = (start: number) => {
        const checked = new Map<number, boolean>();
        let able = true;

        const traversal = (curr: number, startFrom: number) => {
            if (!able) return;

            if (checked.get(curr)) return;
            checked.set(curr, true);

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
        if (!solve(i)) {
            return false;
        }
    }

    return true;
};
