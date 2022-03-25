export const toggleSelect =
  (selectedItem = {}, key = "") =>
  (prevState = {}) => {
    const isEqualByKey = (item) => item[key] === selectedItem[key];
    const isDifferentByKey = (item) => item[key] !== selectedItem[key];

    const alreadySelected = prevState.find(isEqualByKey);

    if (alreadySelected) {
      return prevState.filter(isDifferentByKey);
    }

    return [...prevState, selectedItem];
  };

export const isSelected = ({ item, selectedItems, key }) => {
  if (!Array.isArray(selectedItems) || !key) {
    return false;
  }

  return (
    selectedItems.findIndex((selectedItem) => selectedItem[key] === item[key]) >
    -1
  );
};
