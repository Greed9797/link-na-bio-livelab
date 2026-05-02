import FormShell from "@/components/forms/FormShell";
import { franqueadoForm } from "@/lib/forms/franqueado";

export const metadata = { title: "Quero ser franqueado — LiveLab" };

export default function Page() {
  return <FormShell form={franqueadoForm} />;
}
