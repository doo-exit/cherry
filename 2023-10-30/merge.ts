/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // 양아치 방법 ^_^;
    // nums1.splice(m);
    // nums1.push(...nums2);
    // nums1.sort((a, b) => {
    //     return a - b;
    // });

    if (m === 0) {
        nums1.forEach((_, i) => {
            nums1[i] = nums2[i]
        });
        return;
    }

    if (n === 0) {
        return;
    }

    const arr = [];
    let i = 0, j = 0;

    for (let a = 0; a < m + n; a += 1) {
        const num1 = nums1[i];
        const num2 = nums2[j];

        if (i === m || num1 > num2) {
            arr.push(num2);
            j += 1;
            continue;
        }

        arr.push(num1);
        i += 1;
    }

    nums1.forEach((_, i) => {
        nums1[i] = arr[i]
    });
};
