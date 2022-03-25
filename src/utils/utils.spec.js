import capitalize from "./capitalize";
import hasScheduledItems from "./has-scheduled-items";
import { toggleSelect, isSelected } from "./table-utils";
import mockData from "../mock-data";

describe("utils test kit", () => {
  let item = {
    name: "smss.exe",
    device: "Stark",
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
    status: "scheduled",
  };

  let lannister = {
    name: "lans.exe",
    device: "Lannister",
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
    status: "scheduled",
  };

  let selectedItems = [
    {
      name: "smss.exe",
      device: "Stark",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      status: "scheduled",
    },
    {
      name: "lans.exe",
      device: "Lannister",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      status: "scheduled",
    },
  ];

  describe("capitalize util", () => {
    const str = "available";

    it("should return empty string if input is empty", () => {
      expect(capitalize("")).toStrictEqual("");
    });

    it("should return a capitalized word if input is not empty", () => {
      const expected = "Available";

      expect(capitalize(str)).toStrictEqual(expected);
    });
  });

  describe("hasScheduledItems util", () => {
    let emptyMock = [];

    it("should return false if array is empty", () => {
      expect(hasScheduledItems(emptyMock)).toBe(false);
    });

    it("should return true if array contains scheduled items", () => {
      expect(hasScheduledItems(mockData)).toBe(true);
    });
  });

  describe("toggleSelect util", () => {
    it("should add item to selectedItems if it isn't already selected", () => {
      expect(toggleSelect(item, "name")([])).toStrictEqual([item]);
    });

    it("should remove item from selectedItems if it is already selected", () => {
      expect(toggleSelect(item, "name")(selectedItems)).toStrictEqual([
        lannister,
      ]);
    });

    it("should return empty if all items are deselected", () => {
      expect(toggleSelect(item, "name")([selectedItems[0]])).toStrictEqual([]);
    });
  });

  describe("isSelected util", () => {
    it("should return false if selectedItems is not an array", () => {
      expect(isSelected({ item, selectedItems: {}, key: "name" })).toBe(false);
    });

    it("should return true if item is already selected", () => {
      expect(isSelected({ item, selectedItems, key: "name" })).toBe(true);
    });

    it("should return false if item is not selected", () => {
      expect(
        isSelected({
          item: lannister,
          selectedItems: [selectedItems[0]],
          key: "name",
        })
      ).toBe(false);
    });
  });
});
