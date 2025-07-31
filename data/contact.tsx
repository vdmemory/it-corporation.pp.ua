import { Language } from '#components/language-provider'
import { configCompany } from '#data/configCompany'

export const getContact = (t: (key: string) => string, language: Language) => ({
  title: t('contact.title'),
  description: t('contact.description'),
  formTitle: t('contact.form.title'),
  formDescription: t('contact.form.description'),
  infoTitle: t('contact.info.title'),
  infoDescription: t('contact.info.description'),
  infoEmail: t('contact.info.email'),
  infoPhone: t('contact.info.phone'),
  infoAddress: t('contact.info.address'),
  clientAddress:
    language === 'en'
      ? configCompany.addressEng
      : language === 'ua'
        ? configCompany.addressUa
        : configCompany.address,
  labels: {
    firstName: t('contact.form.firstName'),
    lastName: t('contact.form.lastName'),
    email: t('contact.form.email'),
    message: t('contact.form.message'),
    submit: t('contact.form.submit'),
  },
})
