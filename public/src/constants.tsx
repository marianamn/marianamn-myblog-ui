import { SocialMediaLinks } from "./interfaces";

// Device resolutions
export const mobileResolution = 480;
export const tabletResolution = 768;

// Social media
export const socialMediaLinks: SocialMediaLinks = {
  facebook: "https://www.facebook.com/Marianamn-myblog-2191574801172699/",
  twitter: "https://twitter.com/mariana_mnn",
  instagram: "https://www.instagram.com/marianamn_myblog/",
};

// Logo
export const logoBlack = "assets/images/Logo-black.png";
export const logoWhite = "assets/images/Logo-white.png";

// Form
export const labels = {
  login: "Вписване",
  register: "Регистриране",
  name: "Име",
  email: "Имейл",
  password: "Парола",
  picture: "Снимка",
  loginBtn: "Вход",
  registerBtn: "Регистрация",
}

// Validation
export const passwordMinLength = 6;
export const nameMinLength = 2;
export const nameMaxLength = 40;
export const maxFileSize = 16777216; // 16megabytes in bytes
export const errorMessages = {
  passwordRequired: "Паролата е задължително поле!",
  passwordLengthError: `Паролата трябва да бъде поне ${passwordMinLength} символа!`,
  emailRequired: "Имейлът е задължително поле!",
  emailWrongFormat: "Въведеният имейл е в грешен формат!",
  nameRequired: "Името е задължително поле!",
  nameLengthError: `Името трябва да бъде между ${nameMinLength} и ${nameMaxLength} символа!`,
  pictureFormat: 'Снимката трябва да бъде в един от следните формати "jpg", "jpeg" или "png"!',
  pictureLengthError: "Снимката не трябва да надвишава 16MB!",
};
