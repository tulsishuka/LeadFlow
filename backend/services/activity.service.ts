import Activity from "../models/Activity";


type ActivityType =
  | "created"
  | "assigned"
  | "status"
  | "note";


export const createActivity = async (
  leadId: string,
  userId: string,
  type: ActivityType,
  message: string
) => {

  return await Activity.create({
    lead: leadId,
    user: userId,
    type,
    message,
  });

};


export const getLeadActivities = async (
  leadId: string
) => {

  return await Activity.find({
    lead: leadId,
  })
    .populate(
      "user",
      "name email"
    )
    .sort({
      createdAt: -1,
    });

};

export const getAllActivities = async () => {

  return await Activity.find()
    .populate(
      "user",
      "name email role"
    )
    .populate(
      "lead",
      "name email company"
    )
    .sort({
      createdAt:-1
    });

};