import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <>
      Error
      {error.status}: {error.statusText}
    </>
  );
};
export default Error;
