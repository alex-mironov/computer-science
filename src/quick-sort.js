export default function quickSort(items) {
  return sort(items, 0, items.length - 1);
}

function sort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      sort(items, left, index - 1);
    }

    if (index < right) {
      sort(items, index, right);
    }
  }

  return items;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)];
  let leftIndex = left,
    rightIndex = right;

  while (leftIndex <= rightIndex) {
      while (items[leftIndex] < pivot) {
        leftIndex++;
      }

      while (items[rightIndex] > pivot) {
        rightIndex--;
      }

      if (leftIndex <= rightIndex) {
        swap(items, leftIndex, rightIndex);
        leftIndex++;
        rightIndex--;
      }
  }

  return leftIndex;
}

function swap(items, i, j) {
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}
