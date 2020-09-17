import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.43.29:9000/api",
});

apiClient.get("listings").then((response) => {
  if (!response.ok) {
    return response.problem;
  }
});
