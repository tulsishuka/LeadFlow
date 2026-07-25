import mongoose, { Document, Schema, Types } from "mongoose";

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Qualified"
  | "Proposal Sent"
  | "Won"
  | "Lost";

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;

  status: LeadStatus;

  assignedTo?: Types.ObjectId;

  createdBy?: Types.ObjectId;

  createdAt: Date;
  updatedAt: Date;
}

const leadSchema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Proposal Sent",
        "Won",
        "Lost",
      ],
      default: "New",
    },

    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ILead>("Lead", leadSchema);