import axios, { AxiosInstance } from "axios";

export class AxiosInst {
  private static inst: AxiosInstance;

  private constructor() {}

  public static getInst(): AxiosInstance {
    if (!AxiosInst.inst) {
      AxiosInst.inst = axios.create({
        withCredentials: true,
        baseURL: "http://localhost:5000",
      });
    }

    return AxiosInst.inst;
  }
}
