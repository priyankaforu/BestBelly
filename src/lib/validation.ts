import * as z from "zod";

const validationSchema = z.object({
  gmailId: z.string().email("Please enter a valid email address"),
});

export { validationSchema };
