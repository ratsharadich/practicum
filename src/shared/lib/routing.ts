import Handlebars from "handlebars";
import { PAGE_NAMES, pages, root } from "../consts";

export const registerComponent = (components: Record<string, string>) =>
  Object.entries(components).forEach(([name, component]) =>
    Handlebars.registerPartial(name, component)
  );

// handler for rendering particular page
export const navigate = (page: keyof typeof pages) => {
  const { page: target, components, context } = pages[page];

  // register all of the page hbs components created
  components && registerComponent(components);

  const template = Handlebars.compile(target);
  root.innerHTML = template(context);
};

export const isPage = (page: unknown): page is PAGE_NAMES =>
  Object.values(PAGE_NAMES).includes(page as PAGE_NAMES);
