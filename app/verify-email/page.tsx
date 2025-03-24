"use client"; // ✅ Mark component as Client Component

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import API_URLS from "../../config/urls.js";

const VerifyEmail = () => {
  const searchParams = useSearchParams(); // ✅ Replaces useRouter().query
  const token = searchParams.get("token"); // ✅ Get token from URL
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!token) return;

    const verifyEmail = async () => {
      try {
        await axios.post(API_URLS.VERIFY_EMAIL, { token });
        setStatus("success");

        // ✅ Redirect to login after 3 seconds
        setTimeout(() => router.push("/login"), 3000);
      } catch (error) {
        setStatus("error");
      }
    };

    verifyEmail();
  }, [token, router]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-md">
        {status === "loading" && <p className="text-gray-700">Verifying your email...</p>}
        {status === "success" && <p className="text-green-600">✅ Email successfully verified! Redirecting...</p>}
        {status === "error" && <p className="text-red-600">❌ Verification failed. Invalid or expired token.</p>}
      </div>
    </div>
  );
};

export default VerifyEmail;
