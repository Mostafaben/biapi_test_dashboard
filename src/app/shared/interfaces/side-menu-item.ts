export interface ISideMenuItem {
  name: string;
  icon: string;
  link: string;
  items: Array<ISideMenuSubItem>;
}

export interface ISideMenuSubItem {
  name: string;
  link: string;
}
