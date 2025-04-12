import { cookies } from 'next/headers';

import { AppSidebar } from '@/components/app-sidebar';
import { ModelProvider } from '@/contexts/model-context'; // Import ModelProvider
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import Script from 'next/script';
import { SignedIn } from '@clerk/nextjs';
export const experimental_ppr = true;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isCollapsed = cookieStore.get('sidebar:state')?.value !== 'true';
  const initialModelId = cookieStore.get('chat-model')?.value; // Read chat-model cookie

  return (
    <SignedIn>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <SidebarProvider defaultOpen={!isCollapsed}>
        <AppSidebar />
        <SidebarInset>
          <ModelProvider initialModelId={initialModelId}>
            {' '}
            {/* Wrap with ModelProvider */}
            {children}
          </ModelProvider>
        </SidebarInset>
      </SidebarProvider>
    </SignedIn>
  );
}
