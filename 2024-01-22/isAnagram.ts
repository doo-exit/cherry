function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    
    const sortedS = Array.from(s).sort();
    const sortedT = Array.from(t).sort();

    for (let i = 0; i < s.length; i++) {
        if (sortedS[i] !== sortedT[i]) {
            return false;
        }
    }

    return true;
};
