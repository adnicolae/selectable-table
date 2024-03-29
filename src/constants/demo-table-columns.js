import statusFormatter from "../utils/table-formatters";

const demoTableColumns = [
  {
    name: "selectable",
    title: "",
  },
  {
    name: "name",
    title: "Name",
  },
  {
    name: "device",
    title: "Device",
  },
  {
    name: "path",
    title: "Path",
  },
  {
    name: "status",
    title: "Status",
    formatter: statusFormatter,
  },
];

export default demoTableColumns;
