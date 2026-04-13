---
title: "MCP servers in production: boundaries that matter"
description: "How we think about Model Context Protocol integrations when systems are regulated and failures are expensive."
translationKey: labs-mcp
date: 2026-04-01
---

MCP is a strong idea: standardize how tools expose capabilities to agents. In production, the winning teams treat MCP servers like **any other privileged integration**.

### Design rules we use

- **Least privilege** by default: narrow scopes, explicit credentials, short-lived tokens where possible.
- **Auditable actions**: log intent, inputs, and outcomes—not just “success/fail.”
- **Versioned contracts**: schema and capability changes are explicit; silent breakage is unacceptable.
- **Failure isolation**: a tool outage should not take down the whole automation surface.

### What we measure

Latency distributions, error budgets per tool, and regression suites for critical workflows—especially when an agent is allowed to chain multiple calls.

If you are evaluating MCP for an enterprise environment, start from threat modeling and operational ownership—not from the demo.
