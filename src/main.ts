import * as SharedComponents from "shared/ui";
import { PAGE_NAMES } from "./shared/consts";
import { isPage, navigate, registerComponent } from "./shared/lib";

// register all of the shared components
registerComponent(SharedComponents);

// initial page render
navigate(PAGE_NAMES.NAVIGATION);

document.addEventListener("click", (e) => {
  const page = (e.target as HTMLElement).getAttribute("page");
  if (isPage(page)) {
    navigate(page);

    e.stopPropagation();
    e.stopImmediatePropagation();
  }
});
