import { redirect } from "next/navigation";

import { heroContent } from "@/data/hero";

export default function ResumePage() {
  redirect(heroContent.resume);
}
