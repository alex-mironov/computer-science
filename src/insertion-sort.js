export default function sort(items) {
  for (let i = 0; i < items.length; i++) {
    const val = items[i];

    // shifting the items 1 position right
    // until the correct spot for 'val' is not found
    for (var j = i - 1; j >= 0 && items[j] > val; j--) {
      items[j + 1] = items[j];
    }

    items[j + 1] = val;
  }

  return items;
}
