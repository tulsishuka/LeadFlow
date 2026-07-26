import { AuthRequest } from "../interfaces/AuthRequest";
import * as leadService from "../services/lead.service";
import { Request, Response } from "express";

// Create Lead (Public)
export const createLead = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const lead = await leadService.createLead(req.body);

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Leads
export const getAllLeads = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await leadService.getAllLeads({
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
      status: req.query.status as string,
      assignedTo: req.query.assignedTo as string,
      search: req.query.search as string,
    });

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Single Lead
export const getLeadById = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const lead = await leadService.getLeadById(req.params.id);

    if (!lead) {
      res.status(404).json({
        success: false,
        message: "Lead not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Lead
export const updateLead = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const lead = await leadService.updateLead(
      req.params.id,
      req.body
    );

    if (!lead) {
      res.status(404).json({
        success: false,
        message: "Lead not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      data: lead,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete Lead
export const deleteLead = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const lead = await leadService.deleteLead(req.params.id);

    if (!lead) {
      res.status(404).json({
        success: false,
        message: "Lead not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const assignLead = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {


  try {

    const { userId } = req.body;


    if (!req.user) {
      res.status(401).json({
        success:false,
        message:"Unauthorized"
      });
      return;
    }


    const lead = await leadService.assignLead(
      req.params.id,
      userId,
      req.user._id.toString()
    );


    res.status(200).json({
      success:true,
      message:"Lead assigned successfully",
      data:lead
    });


  } catch(error){

    const err = error as Error;

    res.status(400).json({
      success:false,
      message:err.message
    });

  }

};


/////////////////////








export const getMyLeads = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
      return;
    }

    const leads = await leadService.getMyLeads(
      req.user._id.toString()
    );

    res.status(200).json({
      success: true,
      leads,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};




///////////////////


export const updateLeadStatus = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const { status } = req.body;

    const lead = await leadService.updateLeadStatus(
      req.params.id,
      status
    );

    if (!lead) {
      res.status(404).json({
        success: false,
        message: "Lead not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: lead,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
///////////////////////////




export const updateLeadNotes = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    console.log("Request Body:", req.body);
    console.log("Lead ID:", req.params.id);

    const { notes } = req.body;

    const lead = await leadService.updateLeadNotes(
      req.params.id,
      notes
    );

    console.log("Updated Lead:", lead);

    res.status(200).json({
      success: true,
      message: "Notes updated successfully",
      data: lead,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};