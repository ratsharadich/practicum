import { Button, styles as ButtonStyles } from "./button";
import { Input, styles as InputStyles } from "./input";
import { Form, styles as FormStyles } from "./form";
import { Modal, styles as ModalStyles } from "./modal";

export const components = { Button, Input, Form, Modal };
export const styles = {
  ...ButtonStyles,
  ...InputStyles,
  ...FormStyles,
  ...ModalStyles,
};
