import { redirect } from "next/navigation";

/** Old path — keep working by sending visitors to /lt. */
export default function LithuaniaRedirectPage() {
  redirect("/lt");
}
