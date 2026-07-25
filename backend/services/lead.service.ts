import Lead, { ILead } from "../models/Lead";

interface LeadQuery {
  page?: number;
  limit?: number;
  status?: string;
  assignedTo?: string;
  search?: string;
}

export const createLead = async (
  data: Partial<ILead>
) => {
  const lead = await Lead.create(data);

  return lead;
};

export const getAllLeads = async ({
  page = 1,
  limit = 10,
  status,
  assignedTo,
  search,
}: LeadQuery) => {
  const query: any = {};

  if (status) {
    query.status = status;
  }

  if (assignedTo) {
    query.assignedTo = assignedTo;
  }

  if (search) {
    query.$or = [
      {
        name: {
          $regex: search,
          $options: "i",
        },
      },
      {
        email: {
          $regex: search,
          $options: "i",
        },
      },
      {
        company: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  const total = await Lead.countDocuments(query);

  const leads = await Lead.find(query)
    .populate("assignedTo", "name email")
    .sort({
      createdAt: -1,
    })
    .skip((page - 1) * limit)
    .limit(limit);

  return {
    total,
    page,
    totalPages: Math.ceil(total / limit),
    leads,
  };
};

export const getLeadById = async (
  id: string
) => {
  return await Lead.findById(id)
    .populate("assignedTo", "name email");
};

export const updateLead = async (
  id: string,
  data: Partial<ILead>
) => {
  return await Lead.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
};

export const deleteLead = async (
  id: string
) => {
  return await Lead.findByIdAndDelete(id);
};

export const assignLead = async (
  leadId: string,
  userId: string
) => {
  return await Lead.findByIdAndUpdate(
    leadId,
    {
      assignedTo: userId,
    },
    {
      new: true,
    }
  );
};

export const updateLeadStatus = async (
  leadId: string,
  status: string
) => {
  return await Lead.findByIdAndUpdate(
    leadId,
    {
      status,
    },
    {
      new: true,
    }
  );
};