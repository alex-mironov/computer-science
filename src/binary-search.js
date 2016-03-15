  export default function binarySearch(items, val) {
    let minIndex = 0,
      maxIndex = items.length - 1;

    let middle = Math.floor((minIndex + maxIndex) / 2);

    while (items[middle] !== val && minIndex < maxIndex) {

      if (val < items[middle]) {
        maxIndex = middle - 1;
      } else if (val > items[middle]) {
        minIndex = middle + 1;
      }

      middle = Math.floor((minIndex + maxIndex) / 2);
    }

    return (items[middle] === val) ? middle : -1;
}
