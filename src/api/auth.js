import instance from ".";

export const resetpassword = async (token, data) => {
  const res = await instance.patch(`/api/auth/resetPassword/${token}`, data);
  return res.data;
};

// export default { resetpassword };
