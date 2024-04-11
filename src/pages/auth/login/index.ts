import styles from "../styles.module.css";

import { inputs } from "./consts";

export { default as page } from "./login.hbs?raw";
export const context = {
  inputs,
  styles,
};
