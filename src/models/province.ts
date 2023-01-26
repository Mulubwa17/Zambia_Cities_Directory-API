import { Schema, model } from "mongoose";

interface IProvince {
    name: String;
    capital: string;
    districts:string;

}

const ProvinceSchema = new Schema<IProvince>({
  name: { type: String, required: true },
  capital: { type: String, required: true },},
  {
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
  
});

ProvinceSchema.virtual("districts", {
  ref: "District",
  localField: "_id",
  foreignField: "province",

}
);


export const Province = model<IProvince>("Province", ProvinceSchema);