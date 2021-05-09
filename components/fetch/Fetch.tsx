import { DependencyList } from "react";
import useRequest, { UseRequestState } from "../../hooks/useRequest";
import Endpoint from "../../network/endpoint";

interface FetchProps<T> {
  endpoint: Endpoint<T>;
  dependencies?: DependencyList;
  render: (state: UseRequestState<T>) => React.ReactElement;
}

function Fetch<T>({
  endpoint,
  dependencies,
  render,
}: FetchProps<T>): React.ReactElement {
  return render(useRequest(endpoint, dependencies));
}

export default Fetch;
