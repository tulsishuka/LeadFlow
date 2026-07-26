import { Request, Response } from "express";
import * as dashboardService from "../services/dashboard.service";

export const getDashboardStats = async (
  req: Request,
  res: Response
) => {
  try {
    const stats = await dashboardService.getDashboardStats();

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getDashboardData = async (
  req: Request,
  res: Response
) => {
  try {
    const dashboard =
      await dashboardService.getDashboardData();

    res.status(200).json({
      success: true,
      data: dashboard,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};