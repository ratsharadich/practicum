import styles from "../styles.module.css";

import { inputs } from "./consts";

export { default as page } from "./registration.hbs?raw";
export const context = {
  inputs,
  styles,
};
