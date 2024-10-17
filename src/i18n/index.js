import { createI18n } from 'vue-i18n';
import en from './en.json';
import uz from './uz.json';
import ru from './ru.json';

const messages = {
  en,
  uz,
  ru,
};

const i18n = createI18n({
  locale: 'en', // Default language
  fallbackLocale: 'en',
  messages,
});

export default i18n;
