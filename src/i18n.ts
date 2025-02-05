import { createTranslator } from 'next-intl';

export function getTranslator(locale: string) {
  try {
    const messages = require(`./locales/${locale}.json`);
    return createTranslator({ locale, messages });
  } catch (error) {
    console.error("Translation file not found for locale:", locale);
    return createTranslator({ locale: "en", messages: {} });
  }
}
