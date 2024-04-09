import { Button, styles as ButtonStyles } from "./button";
import { FormInput, styles as FormInputStyles } from "./form-input";
import { Form, styles as FormStyles } from "./form";
import { Modal, styles as ModalStyles } from "./modal";
import { ErrorPage, styles as ErrorPageStyles } from "./error-page";

export const components = { Button, FormInput, Form, Modal, ErrorPage };
export const styles = {
  ...ButtonStyles,
  ...FormInputStyles,
  ...FormStyles,
  ...ModalStyles,
  ...ErrorPageStyles,
};
