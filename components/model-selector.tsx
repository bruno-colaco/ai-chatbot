'use client';

import { startTransition, useMemo, useOptimistic, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { chatModels } from '@/lib/ai/models';
import { cn } from '@/lib/utils';

import { ProviderIcon } from './provider-icon';
import { useModel } from '@/contexts/model-context';
import { CaretDown, CheckCircle } from '@phosphor-icons/react';

export function ModelSelector({
  className,
}: React.ComponentProps<typeof Button>) {
  const { selectedModelId, setSelectedModelId } = useModel();
  const [open, setOpen] = useState(false);
  const [optimisticModelId, setOptimisticModelId] =
    useOptimistic(selectedModelId);

  const selectedChatModel = useMemo(
    () => chatModels.find((chatModel) => chatModel.id === optimisticModelId),
    [optimisticModelId],
  );

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        asChild
        className={cn(
          'w-fit data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
          className,
        )}
      >
        <Button
          data-testid="model-selector"
          variant="outline"
          className="md:px-2 md:h-[34px]"
        >
          {selectedChatModel?.name}
          <CaretDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[300px]">
        {chatModels
          .filter((chatModel) => chatModel.isActive)
          .sort((a, b) =>
            a.isPremium === b.isPremium ? 0 : a.isPremium ? 1 : -1,
          )
          .map((chatModel) => {
            const { id, isPremium } = chatModel;

            const handleSelect = () => {
              setOpen(false);
              startTransition(() => {
                setOptimisticModelId(id);
                document.cookie = `chat-model=${id}; path=/; max-age=31536000; SameSite=Lax`; // Expires in 1 year
                setSelectedModelId(id);
              });
            };

            return (
              <DropdownMenuItem
                data-testid={`model-selector-item-${id}`}
                key={id}
                disabled={isPremium}
                onSelect={!isPremium ? handleSelect : undefined}
                data-active={id === optimisticModelId}
                asChild
              >
                <button
                  type="button"
                  disabled={isPremium}
                  className="gap-4 group/item flex flex-row justify-between items-center w-full"
                >
                  <div className="flex flex-row gap-3 items-center">
                    <ProviderIcon provider={chatModel.provider} size={24} />
                    <div className="flex flex-col gap-1 items-start">
                      <div>{chatModel.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {chatModel.description}
                      </div>
                    </div>
                  </div>

                  <div className="text-foreground dark:text-foreground opacity-0 group-data-[active=true]/item:opacity-100">
                    <CheckCircle weight="fill" />
                  </div>
                </button>
              </DropdownMenuItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
