export const isLogin = ({ auth }) => auth.isLogin;

export const getUserEmail = ({ auth }) => auth.user?.email;
export const getLoadingUserStatus = ({auth}) => auth.isLoadingUser;