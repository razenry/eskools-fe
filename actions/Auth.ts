import { LoginCredentials, LoginResponse } from "@/types/User";
import axios from "axios";
import Cookies from "js-cookie";

export const handleLogin = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      credentials
    );

    const token = response.data.token;

    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/profile`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (token) {
      // Simpan token di cookie
      Cookies.set("authToken", token, { expires: 1 }); // expires dalam 1 hari

      // Simpan data user di cookie juga (opsional)
      if (user) {
        Cookies.set("userData", JSON.stringify(user), { expires: 1 });
      }

      // Set header default axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return {
        success: true,
        token,
        user,
      };
    }

    return {
      success: false,
      message: "No token received",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
};

// Ambil token dari cookie
export const getAuthToken = (): string | undefined => {
  return Cookies.get("authToken");
};

// Hapus token dan data user dari cookie
export const removeAuthToken = (): void => {
  Cookies.remove("authToken");
  Cookies.remove("userData");
  delete axios.defaults.headers.common["Authorization"];
};

// Logout handler
export const handleLogout = (): void => {
  removeAuthToken();

  if (typeof window !== "undefined") {
    window.location.href = "/login"; // Redirect ke login
  }
};

// Inisialisasi header jika token sudah tersimpan
if (typeof window !== "undefined") {
  const token = getAuthToken();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}
