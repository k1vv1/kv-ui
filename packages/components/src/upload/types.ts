import { ExtractPropTypes } from "vue";

export const uploadType = {
  multiple: Boolean,
  accept: String,
  drag: Boolean,
};

export type LinkProps = ExtractPropTypes<typeof uploadType>;
