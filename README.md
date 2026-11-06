# AI Agent Docker

A small Node.js example that sends a chat-completion request to a model served locally by Docker Model Runner using the OpenAI JavaScript SDK.

## Requirements

- Node.js and npm
- Docker Desktop with Docker Model Runner enabled

## Set up Docker Model Runner

1. In Docker Desktop, open **Settings → AI** and enable **Docker Model Runner**.
2. Enable **host-side TCP support** and use port `12434`. The example connects to the runner at `http://localhost:12434`.
3. Pull a model from Docker Hub. For example:

   ```bash
   docker model pull ai/smollm2:360M-Q4_K_M
   ```

Other Docker Hub models you can try include:

```bash
docker model pull ai/gemma3
docker model pull ai/qwen3
```

Model downloads can be large. Check Docker Hub for available tags and resource requirements before pulling a model.

## Install and run

From the project directory:

```bash
npm install
node node.js
```

The script sends a sample prompt and prints the model's response.

## Use a different model

After pulling a model, list your locally available models:

```bash
docker model list
```

Set the `model` value in [node.js](./node.js) to the model identifier shown by the runner. For example:

```js
model: "ai/smollm2:360M-Q4_K_M",
```

To check the identifiers exposed by the OpenAI-compatible API:

```bash
curl http://localhost:12434/engines/v1/models
```

Use the model `id` from that response in the `model` field. The runner must be reachable on port `12434` for the script to work.
# ai-agent-docker
