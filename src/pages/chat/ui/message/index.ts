import Handlebars from "handlebars";
import styles from "./styles.module.css";

Handlebars.registerHelper("isImg", function (this: any, type, opts) {
  return type === "img" ? opts.fn(this) : opts.inverse(this);
});

export { default as Message } from "./message.hbs?raw";
export const context = { styles };
