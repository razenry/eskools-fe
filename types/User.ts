// @/types/User.ts
export interface User {
  data: {
    data: {
      id: string;
      name: string;
      email: string;
      // other user properties
    };
    // possibly other metadata
  };
  // possibly other top-level properties
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: any;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
