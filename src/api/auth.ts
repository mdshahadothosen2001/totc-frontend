/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiInstance, authInstance } from "./index";

const base = "user/auth";

class AuthApi {
  static Login = (data: any) => {
    return authInstance.post(`${base}/token/`, data);
  };

  static RefreshToken = (data: any) => {
    return authInstance.post(`${base}/token/refresh/`, data);
  };

  // Use apiInstance for authenticated endpoints
  static Me = () => {
    return apiInstance.get(`${base}/me/`);
  };

  static Logout = () => {
    return apiInstance.post(`${base}/token/logout/`);
  };

  static SaveDeviceToken = (data: { device_token: string; platform: string }) => {
    return apiInstance.post(`user/device-token/`, data);
  };
}

export default AuthApi;
