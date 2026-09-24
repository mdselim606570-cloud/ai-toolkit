# Domain Mapping (Canonical)

Source of truth for the AI Toolkit domain-based package structure. Names verified against each package's `package.json` (September 2026). Published names remain unchanged (ADR-004).

## Foundation — `packages/foundation/`

| Directory          | Package name                 |
| ------------------- | ---------------------------- |
| `capabilities`     | `@ai-toolkit/capabilities`   |
| `khulnasoft`       | `@ai-toolkit/khulnasoft`     |
| `platform`         | `@ai-toolkit/platform`       |
| `provider`         | `@ai-toolkit/provider`       |
| `runtime`          | `@ai-toolkit/runtime`        |
| `utils`            | `@ai-toolkit/provider-utils` |
| `valibot`          | `@ai-toolkit/valibot`        |

> `@ai-toolkit/provider` and `@ai-toolkit/runtime` are foundation packages (Layer 0). See `architecture/DEPENDENCY_RULES.md`.

## AI Core — `packages/ai/`

| Directory | Package name |
| --------- | ------------ |
| `core`     | `ai-toolkit` (npm: `ai-toolkit`) |

> The main SDK package. Published as `ai-toolkit` on npm.

## Gateway — `packages/gateway/`

| Directory | Package name                 |
| --------- | ---------------------------- |
| `core`     | `@ai-toolkit/gateway`        |

> `@ai-toolkit/gateway` was migrated from `packages/special/gateway/` to `packages/gateway/core/`. Published name unchanged. See `architecture/DEPENDENCY_RULES.md`.

## Providers — `packages/providers/`

| Directory          | Package name                    |
| ------------------- | ------------------------------- |
| `amazon-bedrock`    | `@ai-toolkit/amazon-bedrock`    |
| `anthropic`         | `@ai-toolkit/anthropic`         |
| `assemblyai`        | `@ai-toolkit/assemblyai`        |
| `azure`             | `@ai-toolkit/azure`             |
| `baseten`           | `@ai-toolkit/baseten`           |
| `black-forest-labs` | `@ai-toolkit/black-forest-labs` |
| `bytedance`         | `@ai-toolkit/bytedance`         |
| `cerebras`          | `@ai-toolkit/cerebras`          |
| `cohere`            | `@ai-toolkit/cohere`            |
| `deepgram`          | `@ai-toolkit/deepgram`          |
| `deepinfra`         | `@ai-toolkit/deepinfra`         |
| `deepseek`          | `@ai-toolkit/deepseek`          |
| `elevenlabs`        | `@ai-toolkit/elevenlabs`        |
| `fal`               | `@ai-toolkit/fal`               |
| `fireworks`         | `@ai-toolkit/fireworks`         |
| `gladia`            | `@ai-toolkit/gladia`            |
| `google`            | `@ai-toolkit/google`            |
| `google-vertex`     | `@ai-toolkit/google-vertex`     |
| `groq`              | `@ai-toolkit/groq`              |
| `huggingface`       | `@ai-toolkit/huggingface`       |
| `hume`              | `@ai-toolkit/hume`              |
| `harness`           | `@ai-toolkit/harness`           |
| `harness-acp`       | `@ai-toolkit/harness-acp`       |
| `harness-codex`     | `@ai-toolkit/harness-codex`     |
| `harness-claude-code` | `@ai-toolkit/harness-claude-code` |
| `harness-cline`     | `@ai-toolkit/harness-cline`     |
| `harness-cursor`    | `@ai-toolkit/harness-cursor`    |
| `harness-grok-build` | `@ai-toolkit/harness-grok-build` |
| `harness-opencode`  | `@ai-toolkit/harness-opencode`  |
| `harness-pi`        | `@ai-toolkit/harness-pi`        |
| `lmnt`              | `@ai-toolkit/lmnt`              |
| `luma`              | `@ai-toolkit/luma`              |
| `mistral`           | `@ai-toolkit/mistral`           |
| `openai`            | `@ai-toolkit/openai`            |
| `openai-compatible` | `@ai-toolkit/openai-compatible` |
| `perplexity`        | `@ai-toolkit/perplexity`        |
| `prodia`            | `@ai-toolkit/prodia`            |
| `replicate`         | `@ai-toolkit/replicate`         |
| `revai`             | `@ai-toolkit/revai`             |
| `togetherai`        | `@ai-toolkit/togetherai`        |
| `xai`               | `@ai-toolkit/xai`               |

> Harness provider family uses hub pattern: `harness-acp` is the hub consumed by 7 other harness packages.

## Integrations — `packages/integrations/`

Framework and integration adapters (depend on `ai-toolkit`):

| Directory   | Package name             |
| ----------- | ------------------------ |
| `react`      | `@ai-toolkit/react`      |
| `rsc`        | `@ai-toolkit/rsc`        |
| `angular`    | `@ai-toolkit/angular`    |
| `svelte`     | `@ai-toolkit/svelte`     |
| `vue`        | `@ai-toolkit/vue`        |
| `langchain`  | `@ai-toolkit/langchain`  |
| `llamaindex` | `@ai-toolkit/llamaindex` |

> `langchain`/`llamaindex` are framework integrations over `ai-toolkit`, not raw providers; they live in `integrations`.

## MCP — `packages/mcp/`

| Directory | Package name                         |
| --------- | ------------------------------------ |
| `core`     | `@ai-toolkit/mcp`                     |

> Model Context Protocol implementation. See `architecture/DEPENDENCY_RULES.md` for dependency rules.

## Tooling — `packages/tooling/`

| Directory | Package name             |
| --------- | ------------------------ |
| `codemod`  | `@ai-toolkit/codemod`    |
| `devtools` | `@ai-toolkit/devtools`   |

## UI — `packages/ui/`

| Directory  | Package name             |
| ---------- | ------------------------ |
| `elements` | `@ai-toolkit/elements`   |
| `design`   | `@ai-toolkit/design`     |
| `shadcn-ui` | `@ai-toolkit/shadcn-ui`  |

## Testing — `packages/testing/`

| Directory    | Package name              |
| ----------- | ------------------------- |
| `test-server` | `@ai-toolkit/test-server` |

> Internal test utilities, not published.

## Future Domains (Not Yet Implemented)

The following domains are planned for the 400% platform vision but not yet implemented:

| Domain              | Planned Packages                                                                 |
| ------------------- | ------------------------------------------------------------------------------- |
| `packages/ai/*`     | generation, multimodal, reasoning, structured                                   |
| `packages/agents/*` | core, loop, planner, teams, delegation, skills, harness                          |
| `packages/workflow/*` | core, engine, durable, scheduler, events, queue                                  |
| `packages/context/*` | core, window, compression, summarization, runtime, routing                        |
| `packages/memory/*`  | core, short-term, long-term, semantic, episodic, storage                          |
| `packages/retrieval/*` | core, embeddings, vector, reranking, indexing, rag                               |
| `packages/tools/*`   | core, registry, execution, approval, permissions, discovery                        |
| `packages/sandbox/*` | core, execution, filesystem, network, isolation                                    |
| `packages/evals/*`   | core, datasets, scorers, experiments, benchmarks, regression                       |
| `packages/observability/*` | telemetry, tracing, metrics, logging, cost, replay                              |
| `packages/security/*` | auth, rbac, policy, secrets, audit, isolation                                    |

> See `architecture/FUTURE_DOMAINS.md` for detailed implementation plans.

## Not in `packages/`

- `tools/*`, `examples/*`, `apps/*` are separate workspaces; not migrated into domain groups.
- `eslint-config-khulnasoft-ai` and `@khulnasoft/ai-tsconfig` live under `tools/` and stay there.
