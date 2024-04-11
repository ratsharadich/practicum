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
  ProfileShowPage,
  ProfileEditCredentialsPage,
  ProfileEditPasswordPage,
} = Pages;

export enum PAGE_NAMES {
  LOGIN = "login",
  CHAT = "chat",
  NAVIGATION = "navigation",
  REGISTRATION = "registartion",
  INPUT_MODAL = "input_modal",
  REGUALR_FILE_MODAL = "regular_file_modal",
  WITH_UPLOAD_ERROR_FILE_MODAL = "with_upload_error_file_modal",
  WITH_ACTION_ERROR_FILE_MODAL = "with_action_error_file_modal",
  PROFILE_SHOW = "profile_show",
  PROFILE_EDIT_CREDENTIALS = "profile_edit_credentials",
  PROFILE_EDIT_PASSWORD = "profile_edit_password",
  NOT_FOUND = "not_found",
  SERVER_ERROR = "server_error",
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
  [PAGE_NAMES.PROFILE_SHOW]: ProfileShowPage,
  [PAGE_NAMES.PROFILE_EDIT_CREDENTIALS]: ProfileEditCredentialsPage,
  [PAGE_NAMES.PROFILE_EDIT_PASSWORD]: ProfileEditPasswordPage,
};
