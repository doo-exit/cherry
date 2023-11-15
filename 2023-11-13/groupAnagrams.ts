const EMPTY_KEY = "EMPTY";

function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, Array<string>> = {};
  
  strs.forEach((value) => {
    const key = [...value].sort().join('') || EMPTY_KEY;
    if (!map.hasOwnProperty(key)) map[key] = [];
    map[key] = [...map[key], value];
  });
  
  return Object.values(map);
}
