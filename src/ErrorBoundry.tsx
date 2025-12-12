import HttpError from "@/components/HttpError";
import NotFound from "@/pages/NotFound";
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorBoundary = () => {
  const error = useRouteError();

  let status: string | undefined;
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  const isRouteError = isRouteErrorResponse(error);

  if (isRouteError && error.status === 404) {
    return <NotFound />;
  } else if (isRouteError) {
    status = error.status.toString();
    message = "Error";
    details = error.statusText || details;
  }

  return <HttpError status={status} message={message} details={details} />;
};

export default ErrorBoundary;
