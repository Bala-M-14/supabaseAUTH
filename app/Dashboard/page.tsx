"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const stats = [
    { title: "Total Users", value: 1245 },
    { title: "Active Sessions", value: 342 },
    { title: "Revenue", value: "$12,430" },
    { title: "New Signups", value: 87 },
  ];

  const recentUsers = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah",
    "Ivy", "Jack", "Kara", "Liam", "Mia", "Nina", "Oscar", "Paul",
  ];

  const activityFeed = [
    "Alice signed up", "Bob started a session", "Charlie upgraded plan",
    "David completed onboarding", "Eve made a purchase", "Frank canceled subscription",
    "Grace signed up", "Hannah started a session", "Ivy upgraded plan",
    "Jack completed onboarding", "Kara made a purchase", "Liam canceled subscription",
    "Mia signed up", "Nina started a session", "Oscar upgraded plan", "Paul completed onboarding"
  ];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session && session.user.email) {
        setEmail(session.user.email);
      } else {
        router.push("/login");
      }
    });
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white px-4 py-6 gap-6">
      
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-6 flex-shrink-0">
        <h2 className="text-2xl font-bold tracking-wide text-white mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          {["Overview", "Users", "Analytics", "Settings"].map((item) => (
            <button
              key={item}
              className="text-left px-4 py-2 rounded-full border border-white/10 hover:border-white/30 hover:shadow-[0_0_8px_rgba(255,255,255,0.2)] transition w-full"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white subtle-glow">
            Welcome Back!
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="bg-black/80 border border-white/10 px-4 py-2 rounded-full text-sm font-medium subtle-glow">
              {email || "Loading..."}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-black/80 border border-white/10 rounded-2xl p-6 shadow-[0_0_10px_rgba(255,255,255,0.08)] hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition"
            >
              <p className="text-white/60 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Users & Activity Feed */}
        <div className="flex flex-col lg:flex-row gap-6 flex-1">
          
          <div className="flex-1 bg-black/80 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_0_10px_rgba(255,255,255,0.08)] hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition flex flex-col max-h-[300px] sm:max-h-[400px] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
            <ul className="text-white/70 divide-y divide-white/10">
              {recentUsers.map((user) => (
                <li
                  key={user}
                  className="py-2 px-2 rounded-lg hover:bg-white/5 transition cursor-pointer"
                >
                  {user}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 bg-black/80 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_0_10px_rgba(255,255,255,0.08)] hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition flex flex-col max-h-[300px] sm:max-h-[400px] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
            <ul className="text-white/70 divide-y divide-white/10">
              {activityFeed.map((act, idx) => (
                <li
                  key={idx}
                  className="py-2 px-2 rounded-lg hover:bg-white/5 transition cursor-pointer"
                >
                  {act}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>

      <style jsx>{`
        .subtle-glow {
          text-shadow: 0 0 4px rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
}
