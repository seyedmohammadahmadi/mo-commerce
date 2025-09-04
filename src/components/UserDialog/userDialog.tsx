import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { UserForm } from "../UserForm/userForm";
import { UserFormData } from "../../forms/user-form-schema";

interface UserDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  formData: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<UserFormData>>;
  onSubmit: () => void;
}

export const UserDialog: FC<UserDialogProps> = ({
  open,
  setOpen,
  formData,
  setFormData,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {formData.username ? "Edit User" : "Add New User"}
          </DialogTitle>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <UserForm formData={formData} setFormData={setFormData} />

          {/* Footer */}
          <DialogFooter>
            <Button type="submit">
              {formData.username ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
