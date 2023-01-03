import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { AuthProvider } from "../providers/Auth";
import { Suspense } from "react";

export const AuthLayout = () => {
  const outlet = useOutlet();
  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>loading</div>}>
      <Await
        resolve={userPromise}
        errorElement={<div >Something went wrong!</div>}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};
