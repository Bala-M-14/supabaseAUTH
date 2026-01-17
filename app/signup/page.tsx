"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
    } else {
      router.push("/Dashboard");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div
        className="flex flex-col items-center gap-10
                   border border-white/70 rounded-[40px] px-10 py-16
                   shadow-[0_0_20px_rgba(255,255,255,0.45)]"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white ">
          Get Started
        </h1>

        <div className="flex flex-col items-center gap-6">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-[300px] rounded-full p-3
                       bg-transparent text-white font-medium
                       border border-white/70
                       placeholder:font-medium placeholder:text-white/70
                       outline-none transition
                       focus:border-white
                       focus:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-[300px] rounded-full p-3
                       bg-transparent text-white font-medium
                       border border-white/70
                       placeholder:font-medium placeholder:text-white/70
                       outline-none transition
                       focus:border-white
                       focus:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />

          <button
            onClick={handleSignUp}
            className="inline-flex items-center justify-center
                       rounded-full px-6 py-2
                       bg-white text-black font-semibold
                       border border-black
                       transition-all duration-200
                       hover:bg-gray-200
                       active:scale-95"
          >
            Sign Up
          </button>

          <div className="flex flex-col items-center gap-1 text-white text-sm">
            <p className="text-white/60">or</p>
            <p>
              Have an account?{" "}
              <span
                onClick={() => router.push("/login")}
                className="font-semibold underline underline-offset-4
                           hover:text-gray-300 cursor-pointer transition"
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
