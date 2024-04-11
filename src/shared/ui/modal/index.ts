import Handlebars from "handlebars";

Handlebars.registerHelper("should_upload", function (this: any, variant, opts) {
  return variant === "file" ? opts.fn(this) : opts.inverse(this);
});

export * as styles from "./styles.module.css";
export { default as Modal } from "./modal.hbs?raw";
