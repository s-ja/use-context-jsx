import { makeAutoObservable } from "mobx";

class ThemeStore {
  isDark = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    this.isDark = !this.isDark;
  };
}

export const themeStore = new ThemeStore();
