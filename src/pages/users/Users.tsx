import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useUserStore } from "../../store/AuthStore/authStore";
import { UserDialog } from "../../components/UserDialog/userDialog";
import { UserFormData } from "../../forms/user-form-schema";

interface User {
  id: number;
  username: string;
  role: "ADMIN" | "CUSTOMER";
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    id: undefined,
    username: "",
    role: "CUSTOMER",
  });
  const currentUser = useUserStore((state) => state.user);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get<User[]>("http://localhost:3000/users");
      setUsers(res.data);
    } catch (error) {
      toast.error("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      if (formData.id) {
        // Update existing user
        await axios.put(`http://localhost:3000/users/${formData.id}`, formData);
        toast.success("User updated successfully!");
      } else {
        // Add new user
        const { id, ...dataWithoutId } = formData; // id رو از فرم پاک کن
        await axios.post("http://localhost:3000/users", dataWithoutId);
        toast.success("User created successfully!");
      }
      setOpen(false);
      fetchUsers();
    } catch (error) {
      toast.error("Failed to save user.");
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      toast.success("User deleted successfully!");
      await fetchUsers(); // بعد از حذف کاربر لیست را آپدیت کن
    } catch (error) {
      toast.error("Failed to delete user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button
          onClick={() => {
            setFormData({ id: undefined, username: "", role: "CUSTOMER" });
            setOpen(true);
          }}
        >
          Add New User
        </Button>
      </div>

      <UserDialog
        open={open}
        setOpen={setOpen}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : users.length === 0 ? (
        <div className="text-center">No users found.</div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setFormData({
                          id: user.id,
                          username: user.username,
                          role: user.role,
                        });
                        setOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    {currentUser?.username !== user.username && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      )}
    </div>
  );
}

export default Users;
