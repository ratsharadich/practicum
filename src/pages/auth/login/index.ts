import PageStyles from "../styles.module.css";

import { context as AuthFormContext } from "shared/ui/auth-form";
import { context as InputContext } from "shared/ui/input";
import { context as ButtonContext } from "shared/ui/button";

import { inputs } from "./consts";

export { default as page } from "./login.hbs?raw";
export const context = {
  inputs,
  styles: {
    ...PageStyles,
    ...AuthFormContext.styles,
    ...InputContext.styles,
    ...ButtonContext.styles,
  },
};
