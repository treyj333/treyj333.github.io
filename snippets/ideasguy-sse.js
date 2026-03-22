// Ideas Guy — SSE streaming endpoint with Claude API
// Excerpt from server.js

app.post('/generate', async (req, res) => {
  const { idea, stage, category, askingPrice, currentRevenue } = req.body;
  if (!idea) return res.status(400).json({ error: 'No idea provided' });

  let userMessage = `Business Idea: ${idea}\n`;
  userMessage += `Stage: ${stage === 'buy'
    ? 'Buying an existing business' : 'Starting a new business'}\n`;
  if (category) userMessage += `Category: ${category}\n`;

  // Set up Server-Sent Events
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  try {
    const stream = await client.messages.stream({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 10000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }]
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta'
          && event.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ chunk: event.delta.text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    res.write(`data: ${JSON.stringify({ error: 'Generation failed' })}\n\n`);
    res.end();
  }
});
