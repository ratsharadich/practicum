import Handlebars from "handlebars";
import { PAGE_NAMES, pages, root } from "../consts";
import { styles as sharedStyles } from "shared/ui";

export const registerComponent = (components: Record<string, string>) =>
  Object.entries(components).forEach(([name, component]) =>
    Handlebars.registerPartial(name, component)
  );

// handler for rendering particular page
export const navigate = (page: keyof typeof pages) => {
  const { page: target, components, context } = pages[page];

  const ownStyles = context?.styles;
  //merge styles with shared compontnts styles to have them on the page
  const styles = {
    ...(typeof ownStyles === "object" && !Array.isArray(ownStyles)
      ? ownStyles
      : {}),
    ...sharedStyles,
    ...(sharedStyles.default ? sharedStyles.default : {}),
  };
  const newContext = context ? { ...context, styles } : { styles };

  // register all of the page hbs components created
  components && registerComponent(components);

  const template = Handlebars.compile(target);
  root.innerHTML = template(newContext);
};

export const isPage = (page: unknown): page is PAGE_NAMES =>
  Object.values(PAGE_NAMES).includes(page as PAGE_NAMES);
