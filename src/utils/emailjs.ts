import emailjs from '@emailjs/browser';
import { ContactForm } from '../types';

// EmailJS configuration
const SERVICE_ID = 'service_xeq0f4r';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'NEAa-lOIOar_8jVRk';

export const sendEmail = async (formData: ContactForm): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};

export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};