import instance from ".";

export const resetpassword = async (token, data) => {
  // console.log(token, data);
  console.log(data, "data");
  console.log(token, "token");
  const res = await instance.patch(`/auth/resetPassword/${token}`, data);
  return res.data;
};

// export default { resetpassword };
