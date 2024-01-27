function pushDominoes(dominoes: string): string {
    let temp = '';
    let domino = dominoes;
    while (temp !== domino) {
        temp = domino;
        domino = domino.replaceAll('R.L', '---');
        domino = domino.replaceAll('R.', 'RR');
        domino = domino.replaceAll('.L', 'LL');
    }

    return domino.replaceAll('---', 'R.L');
};
