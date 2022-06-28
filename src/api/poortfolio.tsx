import { ApiResponse, create } from "apisauce";

const BASE_URL = "https://api.akrv.tk";

const portfolioApi = create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const monitor = (reseponse: ApiResponse<any>) => console.log("portfolio response: ", reseponse);

portfolioApi.addMonitor(monitor);

export default portfolioApi;
