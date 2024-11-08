//cookies-next
import { getCookie } from "cookies-next";

//next
import { useRouter } from "next/router";

//components
import Register from "@/components/templates/Register";

function register() {
  const router = useRouter();
  const cookie = getCookie("token");
  if (cookie) router.push("/admin");
  return (
    <div>
      <Register />
    </div>
  );
}

export default register;
