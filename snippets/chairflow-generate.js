// ChairFlow — Dynamic prompt routing for AI content generation
// Excerpt from routes/generate.js

import { generateMessage } from "../lib/claude.js";
import { buildFollowUpPrompt } from "../prompts/followUp.js";
import { buildRebookReminderPrompt } from "../prompts/rebookReminder.js";
import { buildPromoIdeaPrompt } from "../prompts/promoIdea.js";

const requiredFields = {
  followUp: ["clientName", "service", "lastVisitDate"],
  rebookReminder: ["clientName", "serviceType", "rebookWeeks"],
  promoIdea: ["goal", "platform"],
};

const promptBuilders = {
  followUp: buildFollowUpPrompt,
  rebookReminder: buildRebookReminderPrompt,
  promoIdea: buildPromoIdeaPrompt,
};

router.post("/", async (req, res) => {
  const { type, data } = req.body;

  if (!type || !requiredFields[type]) {
    return res.status(400).json({
      error: `Invalid type. Must be: ${Object.keys(requiredFields).join(", ")}`
    });
  }

  const missing = requiredFields[type].filter((f) => !data[f]);
  if (missing.length > 0) {
    return res.status(400).json({ error: `Missing: ${missing.join(", ")}` });
  }

  const { system, user } = promptBuilders[type](data);
  const result = await generateMessage(system, user);
  res.json({ result });
});
