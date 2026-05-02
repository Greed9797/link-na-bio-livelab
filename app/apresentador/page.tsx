import FormShell from "@/components/forms/FormShell";
import { apresentadorForm } from "@/lib/forms/apresentador";

export const metadata = { title: "Candidatura apresentador(a) — LiveLab" };

export default function Page() {
  return <FormShell form={apresentadorForm} />;
}
