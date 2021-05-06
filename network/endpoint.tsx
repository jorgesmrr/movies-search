import { AxiosResponse } from "axios";

type Endpoint<T> = () => Promise<AxiosResponse<T>>;

export default Endpoint;
