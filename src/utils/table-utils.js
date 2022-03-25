/**
 * Updates state on user select/deselect
 * @param {array} selectedItem
 * @param {string} key
 * @returns array: the new array with/without the selectedItem based on select/deselect
 */
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

/**
 * Checks if item has already been selected
 * @param {object} item the item to check for
 * @param {array} selectedItems
 * @param {string} key object key to unique value/id to compare
 * @returns boolean
 */
export const isSelected = ({ item, selectedItems, key }) => {
  if (!Array.isArray(selectedItems) || !key) {
    return false;
  }

  return (
    selectedItems.findIndex((selectedItem) => selectedItem[key] === item[key]) >
    -1
  );
};
