# AI Core Layer

The AI Core layer (Layer 1) provides the main SDK package `ai-toolkit` with high-level functions for text generation, streaming, structured output, embeddings, and image generation.

## Packages

- `ai-toolkit` (published as `ai-toolkit` on npm) - Main SDK package

## Core APIs

- `generateText` - Generate text completion
- `streamText` - Stream text completion
- `generateObject` - Generate structured output
- `streamObject` - Stream structured output
- `embed` / `embedMany` - Generate embeddings
- `generateImage` - Generate images

## Dependencies

AI Core may depend on:
- Foundation layer (types, runtime, provider-utils)
- Provider layer (for provider implementations)

AI Core must not depend on:
- Higher-level domains (agents, workflow, etc.)

See `architecture/DEPENDENCY_RULES.md` for complete dependency rules.
