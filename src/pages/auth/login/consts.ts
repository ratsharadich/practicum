export const inputs = [
  {
    name: "login",
    placeholder: "Логин",
    required: true,
    pattern: "^[A-Za-z0-9]*$",
    errorMessage: "Некорректный логин",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Пароль",
    required: true,
    pattern: "^[A-Za-z0-9&^*!]*$",
    errorMessage: "Некорректный пароль",
  },
];
