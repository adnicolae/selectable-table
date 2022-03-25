const hasScheduledItems = (selectedItems) =>
  selectedItems.findIndex((item) => item.status === "scheduled") > -1;

export default hasScheduledItems;
