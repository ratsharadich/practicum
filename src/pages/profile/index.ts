import styles from "./styles.module.css";
import { LeftArrowIcon, PictureIcon } from "./ui";

export { default as page } from "./profile.hbs?raw";
export const context = {
  styles,
  user: {
    // TODO: mock
    name: "Иван",
    chatName: "Иван",
    lastName: "Иванов",
    email: "pochta@yandex.ru",
    number: "+7 (909) 967 30 30",
    login: "ivanivanov",
  },
};
export const components = { LeftArrowIcon, PictureIcon };
