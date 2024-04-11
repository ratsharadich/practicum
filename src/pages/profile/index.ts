import styles from "./styles.module.css";
import { LeftArrowIcon, PictureIcon } from "./ui";

import { page as showPage } from "./show";
import { page as editCredentialsPage } from "./edit-credentials";
import { page as editPasswordPage } from "./edit-password";

export const context = {
  styles,
  user: {
    // TODO: mock
    name: "Иван",
    display_name: "Иван",
    second_name: "Иванов",
    email: "pochta@yandex.ru",
    phone: "+7 (909) 967 30 30",
    login: "ivanivanov",
    old_password: "мок_пароля",
  },
};

export const components = { LeftArrowIcon, PictureIcon };

export const ProfileShowPage = { page: showPage, context, components };
export const ProfileEditCredentialsPage = {
  page: editCredentialsPage,
  context,
  components,
};
export const ProfileEditPasswordPage = {
  page: editPasswordPage,
  context,
  components,
};
