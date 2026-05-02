import FormShell from "@/components/forms/FormShell";
import { clienteForm } from "@/lib/forms/cliente";

export const metadata = { title: "Quero ser cliente — LiveLab" };

export default function Page() {
  return <FormShell form={clienteForm} />;
}
