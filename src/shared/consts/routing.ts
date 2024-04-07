import * as Pages from "pages";

const { LoginPage, NavigationPage, RegistartionPage } = Pages;

export enum PAGE_NAMES {
  LOGIN = "login",
  NAVIGATION = "navigation",
  REGISTRATION = "registartion",
}

// root element in intext.html
export const root = document.getElementById("app")!;

// pages of application
export const pages: Record<
  PAGE_NAMES,
  {
    page: string;
    components?: Record<string, string>;
    context?: Record<string, unknown>;
  }
> = {
  [PAGE_NAMES.LOGIN]: LoginPage,
  [PAGE_NAMES.NAVIGATION]: NavigationPage,
  [PAGE_NAMES.REGISTRATION]: RegistartionPage,
};
