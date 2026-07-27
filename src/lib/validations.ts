import { z } from "zod";

/** Contact form schema — shared by the client form and the API route. */
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Tell us a little more (min. 10 characters)"),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});
