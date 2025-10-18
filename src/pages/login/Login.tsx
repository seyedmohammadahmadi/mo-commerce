// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useUserStore } from "@/store/AuthStore/authStore";
// import axios from "axios";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

// const loginFormSchema = z.object({
//   username: z.string().min(1, "Username is required"),
// });

// type LoginFormData = z.infer<typeof loginFormSchema>;

// interface User {
//   id: number;
//   username: string;
//   role: "ADMIN" | "CUSTOMER";
// }

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginFormSchema),
//   });

//   const login = useUserStore((state) => state.login);
//   const navigate = useNavigate();

//   const onSubmit = async (data: LoginFormData) => {
//     try {
//       const res = await axios.get<User[]>("http://localhost:3000/users");
//       const foundUser = res.data.find((u) => u.username === data.username);

//       if (!foundUser) {
//         toast.error("User not found!");
//         return;
//       }

//       login(foundUser);
//       toast.success("Logged in successfully!");

//       // 🎯 ریدایرکت حرفه‌ای براساس نقش
//       if (foundUser.role === "ADMIN") {
//         navigate("/");
//       } else {
//         navigate("/");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <Card className="w-full max-w-md shadow-xl">
//         <CardHeader>
//           <CardTitle className="text-center">Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div>
//               <Input placeholder="Username" {...register("username")} />
//               {errors.username && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.username.message}
//                 </p>
//               )}
//             </div>

//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Login;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserStore } from "@/store/AuthStore/authStore";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const loginFormSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

interface User {
  id: string | number;
  username: string;
  role: "ADMIN" | "CUSTOMER";
}

const isDev = import.meta.env.DEV;
const dbUrl = () =>
  new URL("data/db.json", import.meta.env.BASE_URL).toString();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      let users: User[] = [];

      if (isDev) {
        const res = await axios.get<User[]>("http://localhost:3000/users");
        users = res.data;
      } else {
        const res = await fetch(dbUrl());
        const json = await res.json();
        users = json?.users ?? [];
      }

      const foundUser = users.find((u) => u.username === data.username);

      if (!foundUser) {
        toast.error("User not found!");
        return;
      }

      // می‌تونی در صورت نیاز id را نرمال کنی
      const normalizedUser: User = {
        ...foundUser,
        id:
          typeof foundUser.id === "string" &&
          !Number.isNaN(Number(foundUser.id))
            ? Number(foundUser.id)
            : foundUser.id,
      };

      // اگر تایپ استور فقط number می‌خواهد، می‌توانی cast کنی
      login(normalizedUser as any);
      toast.success("Logged in successfully!");

      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input placeholder="Username" {...register("username")} />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
