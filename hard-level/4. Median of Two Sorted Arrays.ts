function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged: number[] = nums1.concat(nums2);
    const sorted: number[] = merged.sort((a,b) => a - b);

    if(sorted.length % 2 === 0){
        const mid1: number = sorted[(sorted.length / 2) - 1];
        const mid2: number = sorted[sorted.length / 2];
        return (mid1 + mid2) / 2;
    }else{
        const mid: number = sorted[Math.floor(sorted.length / 2)]
        return mid;
    }
};
