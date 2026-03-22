# PROJECT SOL — Pattern-matching brain (no neural network needed)
# Excerpt from pattern_brain.py

def think(self, user_input: str) -> str:
    """Process input and generate a response."""
    text = user_input.lower().strip()

    if not text:
        return random.choice(CONFUSED)

    self.context.append({"role": "human", "text": text, "time": time.time()})

    # Check for goodbye
    if any(w in text for w in GOODBYE_WORDS):
        self.memory.set_last_talked(datetime.datetime.now().isoformat())
        return random.choice(GOODBYES)

    # Check for name introduction
    if self.memory.get_friend_name() is None:
        name = self._extract_name(text)
        if name:
            self.memory.set_friend_name(name)
            self.memory.set_first_met(datetime.datetime.now().isoformat())
            return f"{name}. Got it. I'll remember that."

    # Emotional detection
    if any(w in text for w in SAD_WORDS):
        self.memory.add_mood("sad", trigger=text[:100])
        return random.choice(SAD_RESPONSES)

    if any(w in text for w in HAPPY_WORDS):
        self.memory.add_mood("happy", trigger=text[:100])
        return random.choice(HAPPY_RESPONSES)

    # Learn facts about the user
    fact = self._extract_fact(text)
    if fact:
        existing = self.memory.get_facts(limit=999)
        if fact not in existing:
            self.memory.add_fact(fact)
            return f"Filed away: {fact}. Keep going."
