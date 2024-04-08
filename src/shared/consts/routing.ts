import * as Pages from "pages";

const {
  LoginPage,
  NavigationPage,
  RegistartionPage,
  InputModalPage,
  RegularFileModalPage,
  WithActionErrorFileModalPage,
  WithUploadErrorFileModalPage,
} = Pages;

export enum PAGE_NAMES {
  LOGIN = "login",
  NAVIGATION = "navigation",
  REGISTRATION = "registartion",
  INPUT_MODAL = "inputModal",
  REGUALR_FILE_MODAL = "regularFileModal",
  WITH_UPLOAD_ERROR_FILE_MODAL = "withUploadErrorFileModal",
  WITH_ACTION_ERROR_FILE_MODAL = "withActionErrorFileModal",
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
  [PAGE_NAMES.INPUT_MODAL]: InputModalPage,
  [PAGE_NAMES.REGUALR_FILE_MODAL]: RegularFileModalPage,
  [PAGE_NAMES.WITH_UPLOAD_ERROR_FILE_MODAL]: WithUploadErrorFileModalPage,
  [PAGE_NAMES.WITH_ACTION_ERROR_FILE_MODAL]: WithActionErrorFileModalPage,
};
