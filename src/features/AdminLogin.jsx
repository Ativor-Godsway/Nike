import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Send login request
      const res = await axios.post(
        "http://localhost:3000/api/admin/login",
        data
      );

      // Save token in localStorage
      localStorage.setItem("adminToken", res.data.token);

      // Redirect to admin dashboard
      navigate("/admin");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset bg-base-200 border-base-300 rounded-box w-[40vw] border pt-2 pb-5 p-4"
      >
        <legend className="fieldset-legend text-3xl">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <label className="label">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <button className="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
  );
}
