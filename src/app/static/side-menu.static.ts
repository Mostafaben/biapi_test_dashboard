import { ISideMenuItem } from "../shared/interfaces/side-menu-item";

const MENU_ITEMS: Array<ISideMenuItem> = [
  {
    link: "users",
    name: "Overview",
    items: [],
    icon: "fa-chart-line"
  },
  {
    link: "users",
    name: "Users Managements",
    items: [],
    icon: "fa-users"
  },
  {
    link: "",
    name: "Finance",
    items: [],
    icon: "fa-coins"
  },
  {
    link: "",
    name: "Course Managements",
    items: [],
    icon: "fa-book"
  },
  {
    link: "",
    name: "Settings",
    items: [],
    icon: "fa-cogs"
  }
];

export default MENU_ITEMS;
