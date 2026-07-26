import { Request, Response } from "express";
import * as userService from "../services/user.service";
import User from "../models/User";

export const getUsers = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const user = await userService.getUserById(req.params.id);

    res.json({
      success: true,
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const updateUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const user = await userService.updateUser(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    await userService.deleteUser(req.params.id);

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const user = await userService.resetPassword(
      req.params.id,
      req.body.password
    );

    res.json({
      success: true,
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getMembers = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const members = await User.find({
      role: "member"
    })
    .select(
      "_id name email"
    );


    res.status(200).json({

      success:true,

      members,

    });


  } catch(error){

    const err = error as Error;


    res.status(500).json({

      success:false,

      message:err.message,

    });

  }

};