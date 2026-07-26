import mongoose, {
  Schema,
  Document,
  Types,
} from "mongoose";

export interface IActivity extends Document {
  lead: Types.ObjectId;

  user: Types.ObjectId;

  type:
    | "created"
    | "assigned"
    | "status"
    | "note";

  message: string;

  createdAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    lead: {
      type: Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: [
        "created",
        "assigned",
        "status",
        "note",
      ],
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IActivity>(
  "Activity",
  activitySchema
);