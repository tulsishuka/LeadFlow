import { Request, Response } from "express";
import * as activityService from "../services/activity.service";



export const getLeadActivities = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {

  try {

    const activities =
      await activityService.getLeadActivities(
        req.params.id
      );


    res.status(200).json({
      success:true,
      activities,
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:(error as Error).message,
    });

  }

};



export const getAllActivities = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const activities =
      await activityService.getAllActivities();


    res.status(200).json({
      success:true,
      activities,
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:(error as Error).message,
    });

  }
};