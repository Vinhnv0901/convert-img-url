import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

//   import type { OurFileRouter } from "core.ts";
import { OurFileRouter } from "./core";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
