import { ClientLayout } from "@/components/client-layout";

export default function Template({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
