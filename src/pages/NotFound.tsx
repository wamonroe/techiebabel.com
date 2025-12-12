import HttpError from "@/components/HttpError";

const NotFound = () => {
  return (
    <HttpError
      status="404"
      message="Page not found"
      details="Sorry, we couldn't find the page you're looking for."
    />
  );
};

export default NotFound;
