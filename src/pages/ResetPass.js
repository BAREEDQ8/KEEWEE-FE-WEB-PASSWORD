import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { resetpassword } from "../api/auth";
export const ResetPass = () => {
  const { token } = useParams();
  const [data, setData] = useState("");
  const { mutate } = useMutation(["resetpassword", token], () => {
    // api call
    return resetpassword(token, data);
  });

  return (
    <div>
      <h1>Reset Password</h1>
      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
      />
      <button onClick={mutate}>Reset Password</button>
    </div>
  );
};
