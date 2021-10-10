import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export const authProvider = (type, params) => {
   // When a user tries to log in 
   if (type === AUTH_LOGIN) {
      localStorage.setItem('username', { params })
      return Promise.resolve();
   }

   // When a user tries to logout
   if (type === AUTH_LOGOUT) {
      localStorage.removeItem('username');
      return Promise.resolve();
   }

   // When the API throws an error
   if (type === AUTH_ERROR) {
      const { STATUS } = params;
      const STATUS_CODES = [401, 403];

      if (STATUS_CODES.includes(STATUS)) {
         localStorage.removeItem('username');
         return Promise.reject()
      }
      return Promise.resolve()
   }

   // When a user navigates to a new location
   if (type === AUTH_CHECK) {
      return localStorage.getItem('username')
         ? Promise.resolve()
         : Promise.reject();
   }

   return Promise.reject('Unknown Method');
};
