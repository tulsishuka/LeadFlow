import User from "../models/User";

export const getUsers = async () => {
  return await User.find().select("-password").sort({ createdAt: -1 });
};

export const getUserById = async (id: string) => {
  return await User.findById(id).select("-password");
};

export const createUser = async (data: any) => {
  return await User.create(data);
};

export const updateUser = async (id: string, data: any) => {
  return await User.findByIdAndUpdate(id, data, {
    new: true,
  }).select("-password");
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};

export const resetPassword = async (
  id: string,
  password: string
) => {
  return await User.findByIdAndUpdate(
    id,
    { password },
    { new: true }
  );
};