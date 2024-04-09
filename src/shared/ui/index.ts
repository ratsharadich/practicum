import { Button, styles as ButtonStyles } from "./button";
import { FormInput, styles as FormInputStyles } from "./form-input";
import { Form, styles as FormStyles } from "./form";
import { Modal, styles as ModalStyles } from "./modal";

export const components = { Button, Input: FormInput, Form, Modal };
export const styles = {
  ...ButtonStyles,
  ...FormInputStyles,
  ...FormStyles,
  ...ModalStyles,
};
