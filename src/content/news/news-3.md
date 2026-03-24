---
title: "AXEROAI API Now Generally Available"
description: "The full AXEROAI API suite is GA — function calling, vision, streaming, tool use, and a 99.9% uptime SLA for production workloads."
date: "2025-01-15"
category: "Platform"
author: "AXEROAI Platform Team"
---

## AXEROAI API: Generally Available

After six months of private beta, the AXEROAI API is now **generally available** to all developers. Starting today, you can sign up for an API key, select a plan, and build production applications without a waitlist.

## What's Included

The GA release includes the full feature set we refined during the beta:

### Core Messaging
The core `/v1/messages` endpoint lets you send multi-turn conversations to any AXEROAI model. It supports text, images, and documents as inputs, and returns streaming or non-streaming responses.

### Tool Use
Function calling allows your model to interact with external APIs, databases, and services in a structured way. Define your tools in JSON schema format and the model will select and invoke the right tools based on the conversation context.

### Vision
All Axero 3 models now support image inputs. Send JPEG, PNG, GIF, or WebP images and ask the model to describe, analyze, compare, or extract information from them.

### Streaming
Use server-sent events to stream tokens as they're generated. This significantly improves perceived latency for user-facing applications. Our Python and TypeScript SDKs include convenient streaming helpers.

### Batch Processing
For offline or high-volume workloads, our Batch API lets you submit up to 10,000 requests at once with up to 50% cost savings and results delivered within 24 hours.

## SLA and Reliability

Enterprise customers now have access to our **99.9% uptime SLA** — backed by redundant infrastructure across multiple cloud regions. We publish our real-time status and historical uptime data on our status page.

## Pricing

Our GA pricing is usage-based:

- **Axero 3 Haiku**: $0.25 / million input tokens, $1.25 / million output tokens
- **Axero 3 Sonnet**: $3.00 / million input tokens, $15.00 / million output tokens  
- **Axero 3 Opus**: $15.00 / million input tokens, $75.00 / million output tokens

Volume discounts are available for enterprise customers. Contact our sales team.

## Getting Started

```bash
pip install axeroai
```

```python
import axeroai

client = axeroai.Client()
message = client.messages.create(
    model="axero-3-sonnet",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}]
)
print(message.content[0].text)
```

Full documentation is available at [axeroai.com/blocks](/blocks).

---

*We're grateful to the thousands of beta users whose feedback shaped this release.*
