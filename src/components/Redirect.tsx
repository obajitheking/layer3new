import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Redirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return <div>Redirect</div>;
}

Redirect.propTypes = {};

export default Redirect;
