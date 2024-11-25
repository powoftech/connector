import { EmploymentType, LocationType, Role } from "@prisma/client";
import { z } from "zod";

export const EmailFormSchema = z.object({
  email: z.string().email("Please enter a valid email address").trim(),
});
export type EmailFormInputs = z.infer<typeof EmailFormSchema>;

export const ProfileSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Display name is required" })
    .max(100, { message: "Exceeded maximum character length of 100" })
    .regex(/^[\p{L}\p{M}\p{Zs}'-]+$/u, "Invalid characters in display name")
    .trim(),
  role: z.nativeEnum(Role),
  headline: z
    .string()
    .max(220, { message: "Exceeded maximum character length of 220" })
    .trim()
    .optional(),
  about: z
    .string()
    .max(2600, { message: "Exceeded maximum character length of 2,600" })
    .trim()
    .optional(),
  country: z.string().min(2, { message: "Country is required" }),
  city: z.string().min(2, { message: "City is required" }),
});
export type ProfileInputs = z.infer<typeof ProfileSchema>;

export const EducationSchema = z.object({
  school: z
    .string()
    .min(2, { message: "School name must be 2 or more characters long" }),
  degree: z.string(),
  field: z.string(),
  start: z.date({ message: "Start date is required" }),
  end: z.date(),
  grade: z.string(),
  description: z.string(),
});
export type EducationInputs = z.infer<typeof EducationSchema>;

export const ExperienceSchema = z.object({
  title: z.string().min(2, { message: "Title is required" }),
  company: z
    .string()
    .min(2, { message: "Company name must be 2 or more characters long" }),
  employmentType: z.nativeEnum(EmploymentType),
  location: z.string(),
  locationType: z.nativeEnum(LocationType),
  start: z.date({ message: "Start date is required" }),
  end: z.date(),
  description: z.string(),
});
export type ExperienceInputs = z.infer<typeof ExperienceSchema>;
