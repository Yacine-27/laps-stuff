import { useRouteError } from "react-router-dom";

export default function PathError() {
  const error = useRouteError();
  return (
    <div className="bg-slate-950 min-h-screen">
      <h1 className="text-xl font-bold">Oops!</h1>
      <p className="text-md font-semibold text-slate-300">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
