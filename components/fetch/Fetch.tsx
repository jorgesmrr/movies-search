import { DependencyList } from "react";
import useRequest, { UseRequestState } from "../../hooks/useRequest";
import Endpoint from "../../network/endpoint";

function Fetch<T>({
  endpoint,
  dependencies,
  render,
}: {
  endpoint: Endpoint<T>;
  dependencies?: DependencyList;
  render: (state: UseRequestState<T>) => React.ReactElement;
}): React.ReactElement {
  return render(useRequest(endpoint, dependencies));
}

export default Fetch;
