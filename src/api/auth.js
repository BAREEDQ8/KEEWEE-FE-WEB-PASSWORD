import instance from ".";

export const resetpassword = async (token, data) => {
  console.log(token, data);
  const res = await instance.patch(`/api/auth/resetPassword/${token}`, data);
  return res.data;
};

// export default { resetpassword };
