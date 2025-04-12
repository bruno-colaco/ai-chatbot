import { customProvider } from 'ai';
import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { anthropic } from '@ai-sdk/anthropic';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'gpt-4o': openai('gpt-4o'),
        'gpt-4o-mini': openai('gpt-4o-mini'),
        'o3-mini': openai('o3-mini'),
        'gemini-2.0-flash': google('gemini-2.0-flash'),
        'gemini-2.0-flash-lite': google('gemini-2.0-flash-lite'),
        'claude-3-7-sonnet-latest': anthropic('claude-3-7-sonnet-latest'),
        'claude-3-5-haiku-latest': anthropic('claude-3-5-haiku-latest'),
        'deepseek/deepseek-chat-v3-0324': openrouter(
          'deepseek/deepseek-chat-v3-0324',
        ),
        'deepseek/deepseek-r1': openrouter('deepseek/deepseek-r1'),
        'meta-llama/llama-4-maverick': openrouter(
          'meta-llama/llama-4-maverick',
        ),
      },
    });
