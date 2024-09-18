// import Providers from 'next-auth/providers';

// // eslint-disable-next-line import/no-extraneous-dependencies
// const axios = require('axios');

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   Provider: [
//     Providers.Credentials({
//       id: 'custom-provider',
//       name: 'Custom Provider',
//       type: 'credentials',
//       authorize: async ({ credentials }) => {
//         const { email, password } = credentials;
//         const response = await axios
//           .post(
//             `${process.env.NEXT_PUBLIC_CLERK_API_URL}api/v1/users/login`,
//             credentials,
//           )
//           // eslint-disable-next-line no-shadow
//           .then((response) => response.data)
//           .catch((err) => {
//             // eslint-disable-next-line no-console
//             console.log('err ', err.response);
//           });
//         // eslint-disable-next-line no-lone-blocks
//         {
//           // eslint-disable-next-line no-sequences, no-unused-expressions
//           email, password;
//         }

//         const { token, user } = response.data;

//         return {
//           user: {
//             id: user.id,
//             name: user.name,
//             email: user.email,
//           },
//           token,
//         };
//       },
//     }),
//   ],
//   session: {
//     jwt: true,
//   },
// };
