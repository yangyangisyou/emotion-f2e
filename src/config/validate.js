import * as yup from 'yup';

// const REGEX_EMAIL = /^[A-Za-z0-9_.-]+(\.[A-Za-z0-9_.-]+)*@[A-Za-z0-9_.-]+(\.[A-Za-z0-9_.-]+)*(\.[A-Za-z]{2,})$/;

export const validateEdit = yup.object().shape({
  userName: yup.string()
    .required('Your name is required'),
  productName: yup.string()
    .required('Title name is required'),
  description: yup.string()
    .required('Description is required'),
  productType: yup.number().nullable()
    .required('Please choose the type'),
  selectedImage: yup.string()
    .required('Please select type and image'),
});
