import { Link } from "react-router";

export type HttpErrorProps = {
  status: string | undefined;
  message: string;
  details: string;
};

const HttpError = ({ status, message, details }: HttpErrorProps) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold sm:text-4xl text-gray-300">{status}</p>
        <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight text-balance sm:text-7xl text-gray-200">
          {message}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8 text-gray-400">{details}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold shadow-xs bg-slate-200 text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-slate-300 hover:text-slate-900"
          >
            Take me out of here!
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HttpError;
