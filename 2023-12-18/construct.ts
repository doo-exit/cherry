/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(grid: number[][]): Node | null {
    const isLeaf = (sr: number, er: number, sc: number, ec: number) => {
        const set = new Set<number>();

        for (let r = sr; r < er; r++) {
            for (let c = sc; c < ec; c++) {
                set.add(grid[r][c]);
                if (set.size > 1) return false;
            }
        }
        return true;
    }

    const dfs = (sr: number, er: number, sc: number, ec: number) => {
        if (isLeaf(sr, er, sc, ec)) {
            return new Node(!!grid[sr][sc], true);
        }
        
        const mr = Math.floor((sr + er) / 2);
        const mc = Math.floor((sc + ec) / 2);

        const tl = dfs(sr, mr, sc, mc);
        const tr = dfs(sr, mr, mc, ec);
        const bl = dfs(mr, er, sc, mc);
        const br = dfs(mr, er, mc, ec);

        return new Node(false, false, tl, tr, bl, br);
    }

    const n = grid.length;
    return dfs(0, n, 0, n);
};
