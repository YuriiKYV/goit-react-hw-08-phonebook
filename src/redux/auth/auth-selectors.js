export const isLogin = ({ auth }) => auth.isLogin;
export const getUserName = ({ auth }) => auth.user?.name;
export const getUserEmail = ({ auth }) => auth.user?.email;
export const getLoadingUserStatus = ({auth}) => auth.isLoadingUser;
// export const getUserName = ({auth}) => {
//     return console.log(auth)
// };