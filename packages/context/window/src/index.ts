export type WindowConfig = {
  readonly maxTokens: number;
  readonly strategy: 'sliding' | 'expanding' | 'summarize';
  readonly compressionThreshold?: number;
};

export type WindowState = {
  readonly totalTokens: number;
  readonly usedTokens: number;
  readonly availableTokens: number;
  readonly overflow: boolean;
};

export interface WindowManager {
  configure(config: WindowConfig): void;
  getState(): WindowState;
  trim(tokensToRemove: number): void;
  checkOverflow(): boolean;
}

export function createWindowManager(config: WindowConfig): WindowManager {
  let totalTokens = 0;
  let usedTokens = 0;
  const state: WindowState = {
    totalTokens: config.maxTokens,
    usedTokens: 0,
    availableTokens: config.maxTokens,
    overflow: false,
  };

  return {
    configure: newConfig => {
      Object.assign(config, newConfig);
      state.totalTokens = config.maxTokens;
      state.availableTokens = config.maxTokens - usedTokens;
    },
    getState: () => ({ ...state }),
    trim: tokens => {
      usedTokens = Math.max(0, usedTokens - tokens);
      state.usedTokens = usedTokens;
      state.availableTokens = config.maxTokens - usedTokens;
      state.overflow = state.usedTokens > config.maxTokens;
    },
    checkOverflow: () => state.overflow,
  };
}
