import { z } from "zod";

export const userFormSchema = z.object({
  id: z.number().optional(),
  username: z.string().min(1, "Username is required"),
  role: z.enum(["ADMIN", "CUSTOMER"], {
    errorMap: () => ({ message: "Role must be ADMIN or CUSTOMER" }),
  }),
});

export type UserFormData = z.infer<typeof userFormSchema>;

export interface UserFormProps {
  formData: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<UserFormData>>;
}
