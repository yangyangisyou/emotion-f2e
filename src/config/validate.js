import * as yup from 'yup';

// const REGEX_EMAIL = /^[A-Za-z0-9_.-]+(\.[A-Za-z0-9_.-]+)*@[A-Za-z0-9_.-]+(\.[A-Za-z0-9_.-]+)*(\.[A-Za-z]{2,})$/;

export const validateEdit = yup.object().shape({
  userName: yup.string()
    .required('Your name is required'),
  productName: yup.string()
    .required('Title name is required'),
  productType: yup.number().nullable()
    .required('Please choose the type')
  // email: yup.string()
  //   .matches(REGEX_EMAIL, { message: '請填寫正確的格式' })
  //   .required('請填寫電子信箱'),
  // password: yup.string()
  //   .required('請填寫密碼'),
});
