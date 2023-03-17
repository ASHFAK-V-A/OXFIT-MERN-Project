import mongoose from "mongoose";

const PlansSchema = mongoose.Schema(
  {
    PlanName: {
      type: String,
      required: true,
    },
    PlanDuration: {
      type: Number,
      required: true,
    },

    PlanAmount: {
      type: Number,
      required: true,
    },

    isActive: { type: Boolean, default: false }, 
    StartDate: { type: Date, default: null }, 
    ExpirationDate: { type: Date, default: null },
  },
  { timestamps: true }
);


const PlanSchema = mongoose.model("plans", PlansSchema);

export default PlanSchema;
