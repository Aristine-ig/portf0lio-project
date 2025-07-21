import emailjs from '@emailjs/browser';
import { ContactForm } from '../types';

// EmailJS configuration
const SERVICE_ID = 'service_xeq0f4r'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID  
const PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

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