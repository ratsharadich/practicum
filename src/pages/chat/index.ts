import styles from "./styles.module.css";
import {
  ProfileArrowIcon,
  RightArrowIcon,
  PaperClipIcon,
  MessageCheckIcon,
  KebabMenuIcon,
} from "./assets";
import {
  MagnifierIcon,
  SearchInput,
  context as SearchInputContext,
} from "./ui/search-input";
import { addressee, dates } from "./consts";
import { Addressee, context as AddresseeContext } from "./ui/addressee";
import {
  MessageInput,
  context as MessageInpueContext,
} from "./ui/message-input";
import { Message, context as MessageContext } from "./ui/message";

export { default as page } from "./chat.hbs?raw";
export const context = {
  companionName: "Вадим", // TODO: mock
  dates,
  addressee,
  styles: {
    ...styles,
    ...SearchInputContext.styles,
    ...AddresseeContext.styles,
    ...MessageInpueContext.styles,
    ...MessageContext.styles,
  },
};
export const components = {
  ProfileArrowIcon,
  RightArrowIcon,
  PaperClipIcon,
  MagnifierIcon,
  MessageCheckIcon,
  KebabMenuIcon,
  SearchInput,
  MessageInput,
  Addressee,
  Message,
};
