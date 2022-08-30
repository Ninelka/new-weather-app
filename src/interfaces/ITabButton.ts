import { ITab } from "./ITab";

export interface ITabButton {
  tab: ITab;
  handleChangeTab: (value: string) => void;
  activeTab: number;
}
