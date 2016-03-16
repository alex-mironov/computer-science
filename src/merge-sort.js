
function merge(items1, items2) {
  let i = 0,
    j = 0,
    result = [];

  while (result.length !== items1.length + items2.length) {

    if (i >= items1.length) {
      // irems1 array has been exhausted, copy items from items2
      result.push(items2[j++]);
    } else if (j >= items2.length) {
      // irems2 array has been exhausted, copy items from items1
      result.push(items1[i++]);
    } else {

      if (items1[i] < items2[j]) {
        result.push(items1[i++]);
      } else {
        result.push(items2[j++]);
      }

    }
  }

  return result;
}

export default function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }

  const middle = Math.floor(items.length / 2);

  const left = mergeSort(items.slice(0, middle));
  const right = mergeSort(items.slice(middle));

  return merge(left, right);
}
