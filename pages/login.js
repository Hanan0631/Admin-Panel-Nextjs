//cookies-next
import { getCookie } from "cookies-next";

//next
import { useRouter } from "next/router";

//components
import Login from "@/components/templates/Login";

function login() {
  const router = useRouter();
  const cookie = getCookie("token");
  if (cookie) router.push("/admin");
  return (
    <div>
      <Login />
    </div>
  );
}

export default login;
