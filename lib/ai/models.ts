export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export enum ChatModelProvider {
  OpenAI = 'OpenAI',
  Google = 'Google',
  Meta_AI = 'Meta AI',
  Anthropic = 'Anthropic',
  xAI = 'xAi',
  DeepSeek = 'DeepSeek',
  Mistral_AI = 'Mistral AI',
  Alibaba_Cloud = 'Alibaba Cloud',
}

type ChatModelCapabilities = {
  reasoning: boolean;
  webSearch: boolean;
  inputImages: boolean;
  documents: boolean;
};
interface ChatModel {
  id: string;
  name: string;
  description: string;
  provider: ChatModelProvider;
  inputCost: number;
  outputCost: number;
  capabilities: ChatModelCapabilities;
  isPremium: boolean;
  isActive: boolean;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: ChatModelProvider.OpenAI,
    inputCost: 2.5,
    outputCost: 10,
    description: "OpenAI's latest flagship model",
    capabilities: {
      reasoning: false,
      webSearch: false,
      inputImages: true,
      documents: false,
    },
    isPremium: true,
    isActive: true,
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o-mini',
    provider: ChatModelProvider.OpenAI,
    inputCost: 0.15,
    outputCost: 0.6,
    description: 'A smaller, faster, and cheaper GPT-4o',
    capabilities: {
      reasoning: false,
      webSearch: false,
      inputImages: true,
      documents: false,
    },
    isPremium: false,
    isActive: true,
  },
  {
    id: 'gpt-4.5-preview',
    name: 'GPT-4.5',
    provider: ChatModelProvider.OpenAI,
    inputCost: 75,
    outputCost: 150,
    description: '',
    capabilities: {
      reasoning: false,
      webSearch: false,
      inputImages: false,
      documents: false,
    },
    isPremium: true,
    isActive: false,
  },
  {
    id: 'o1',
    name: 'o1',
    provider: ChatModelProvider.OpenAI,
    inputCost: 15,
    outputCost: 60,
    description: 'High cost OpenAI model',
    capabilities: {
      reasoning: false,
      webSearch: false,
      inputImages: false,
      documents: false,
    },
    isPremium: true,
    isActive: false,
  },
  {
    id: 'o3-mini',
    name: 'o3-mini',
    provider: ChatModelProvider.OpenAI,
    inputCost: 1.1,
    outputCost: 4.4,
    description: 'Lower cost OpenAI model',
    capabilities: {
      reasoning: true,
      webSearch: false,
      inputImages: false,
      documents: false,
    },
    isPremium: true,
    isActive: true,
  },
  {
    id: 'gemini-2.5-pro-preview-03-25',
    name: 'Gemini 2.5 Pro Preview',
    provider: ChatModelProvider.Google,
    inputCost: 1.25,
    outputCost: 10,
    description: "Google's model for reasoning",
    capabilities: {
      reasoning: true,
      webSearch: true,
      inputImages: true,
      documents: false,
    },
    isPremium: true,
    isActive: true,
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    provider: ChatModelProvider.Google,
    inputCost: 0.1,
    outputCost: 0.4,
    description: "Google's fast and efficient model",
    capabilities: {
      reasoning: false,
      webSearch: true,
      inputImages: true,
      documents: true,
    },
    isPremium: false,
    isActive: true,
  },
  {
    id: 'gemini-2.0-flash-lite',
    name: 'Gemini 2.0 Flash-Lite',
    provider: ChatModelProvider.Google,
    inputCost: 0.075,
    outputCost: 0.3,
    description: 'A lighter version of Gemini 2.0 Flash',
    capabilities: {
      reasoning: false,
      webSearch: false,
      inputImages: false,
      documents: false,
    },
    isPremium: false,
    isActive: true,
  },
  {
    id: 'claude-3-7-sonnet-latest',
    name: 'Claude 3.7 Sonnet',
    provider: ChatModelProvider.Anthropic,
    inputCost: 3,
    outputCost: 15,
    description: "Anthropic's balanced model",
    capabilities: {
      reasoning: true,
      webSearch: false,
      inputImages: true,
      documents: false,
    },
    isPremium: true,
    isActive: true,
  },
  {
    id: 'claude-3-5-haiku-latest',
    name: 'Claude 3.5 Haiku',
    provider: ChatModelProvider.Anthropic,
    inputCost: 0.8,
    outputCost: 4,
    description: "Anthropic's fastest and most affordable model",
    capabilities: {
      reasoning: false,
      webSearch: false,
      inputImages: true,
      documents: false,
    },
    isPremium: false,
    isActive: true,
  },
  {
    id: 'deepseek/deepseek-chat-v3-0324',
    name: 'DeepSeek-V3',
    provider: ChatModelProvider.DeepSeek,
    inputCost: 0.27,
    outputCost: 1.1,
    description: "DeepSeek's chat-optimized model",
    capabilities: {
      reasoning: false,
      webSearch: false,
      inputImages: false,
      documents: false,
    },
    isPremium: false,
    isActive: true,
  },
  {
    id: 'deepseek/deepseek-r1',
    name: 'DeepSeek-R1',
    provider: ChatModelProvider.DeepSeek,
    inputCost: 0.55,
    outputCost: 2.19,
    description: "DeepSeek's reasoning-focused model",
    capabilities: {
      reasoning: true,
      webSearch: false,
      inputImages: false,
      documents: false,
    },
    isPremium: true,
    isActive: true,
  },
  {
    id: 'meta-llama/llama-4-maverick',
    name: 'Llama 4 Maverick',
    provider: ChatModelProvider.Meta_AI,
    inputCost: 0.2,
    outputCost: 0.6,
    description: "Meta's large language model",
    capabilities: {
      reasoning: true,
      webSearch: false,
      inputImages: true,
      documents: false,
    },
    isPremium: false,
    isActive: true,
  },
];
