import { Schema, model, Types } from "mongoose";

interface IDistrict {
    name: String;
    population: number;
    province: Types.ObjectId;
}

  const DistrictSchema = new Schema<IDistrict>({
  name: { type: String, required: true },
  population: { type: Number, required: false },
  province: { type: Schema.Types.ObjectId, required: true, ref: 'Province'},
});

export const District = model<IDistrict>("District", DistrictSchema);