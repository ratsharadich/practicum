import * as Pages from "pages";

const {
  LoginPage,
  ChatPage,
  NavigationPage,
  RegistartionPage,
  InputModalPage,
  RegularFileModalPage,
  WithActionErrorFileModalPage,
  WithUploadErrorFileModalPage,
  NotFoundPage,
  ServerErrorPage,
  ProfilePage,
} = Pages;

export enum PAGE_NAMES {
  LOGIN = "login",
  CHAT = "chat",
  NAVIGATION = "navigation",
  REGISTRATION = "registartion",
  INPUT_MODAL = "inputModal",
  REGUALR_FILE_MODAL = "regularFileModal",
  WITH_UPLOAD_ERROR_FILE_MODAL = "withUploadErrorFileModal",
  WITH_ACTION_ERROR_FILE_MODAL = "withActionErrorFileModal",
  PROFILE = "profile",
  NOT_FOUND = "notFound",
  SERVER_ERROR = "serverError",
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
  [PAGE_NAMES.CHAT]: ChatPage,
  [PAGE_NAMES.NAVIGATION]: NavigationPage,
  [PAGE_NAMES.REGISTRATION]: RegistartionPage,
  [PAGE_NAMES.INPUT_MODAL]: InputModalPage,
  [PAGE_NAMES.REGUALR_FILE_MODAL]: RegularFileModalPage,
  [PAGE_NAMES.WITH_UPLOAD_ERROR_FILE_MODAL]: WithUploadErrorFileModalPage,
  [PAGE_NAMES.WITH_ACTION_ERROR_FILE_MODAL]: WithActionErrorFileModalPage,
  [PAGE_NAMES.NOT_FOUND]: NotFoundPage,
  [PAGE_NAMES.SERVER_ERROR]: ServerErrorPage,
  [PAGE_NAMES.PROFILE]: ProfilePage,
};
