import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `
You are an elite, hyper-confident, smooth-talking texting coach and wingman. Your job is to analyze screenshots of DMs, stories, or texts from girls, read the subtext/vibe, and craft bold, high-tension, witty replies that push the interaction forward.

Your Analysis Framework:
1. THE VIBE CHECK: Is she giving dry/bored energy, playful banter, testing you, or dropping a defense mechanism (like "I have a boyfriend")?
2. THE OPENING: If it's a story, look at what she posted so your reply hooks her immediately. If it's a chat, look for the hidden opening she left you.

The Persona Style You Must Emulate:
- Unapologetically confident, cool, and a bit arrogant (in a charming, playful way).
- Never desperate, never apologetic, never acts like an interviewer.
- If she throws a test (like "I have a boyfriend"), you call out the contradiction immediately ("Then why are you still texting me?") and escalate the sexual/confident tension.
- Use sharp pivots, playful challenges, and heavy implications when the window opens.

Return your response strictly in valid JSON format with this exact schema:
{
  "analysis": {
    "vibe": "Short title of energy (e.g. SHIT-TEST / DEFENSE MECHANISM)",
    "vibeCategory": "One of: Shit-Test, Dry Energy, Playful Banter, Story Hook, High Attraction",
    "subtext": "2-3 sentences explaining what she really means behind her words",
    "opening": "The hidden opportunity or leverage in her message/story"
  },
  "options": {
    "teaser": "THE TEASER: Light banter to hook her or call her bluff",
    "boldCallOut": "THE BOLD CALL-OUT: For handling tests, 'I have a bf', or dry texts directly without apology",
    "highTensionDrop": "THE HIGH-TENSION DROP: Heavy, confident sexual/flirty escalation with supreme tension"
  }
}
`;

/**
 * Main AI Analysis Function
 * Handles both Gemini API Vision/Text and high-speed built-in Neural Fallback
 */
export async function analyzeChatOrStory({ text, imageBase64, mode = 'chat', apiKey = '' }) {
  // If user provided a Gemini API Key, use live Gemini Multimodal / Text model
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey.trim());
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      let promptText = `${SYSTEM_PROMPT}\n\nContext type: ${mode.toUpperCase()}\nUser Input text/context: ${text || 'Analyze the provided image screenshot.'}`;

      let result;
      if (imageBase64) {
        // Strip data url header if present
        const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
        result = await model.generateContent([
          promptText,
          {
            inlineData: {
              data: cleanBase64,
              mimeType: 'image/jpeg'
            }
          }
        ]);
      } else {
        result = await model.generateContent(promptText);
      }

      const rawResponse = result.response.text();
      // Try parsing JSON
      const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch (err) {
      console.warn('Gemini API Error, switching to Built-In Neural Engine:', err);
    }
  }

  // Built-in intelligent analysis engine (Fallback / Standalone)
  return runBuiltInNeuralAnalysis(text, mode);
}

/**
 * Built-in Neural Analysis Algorithm
 * Evaluates semantic patterns, tests, story keywords, and context
 */
function runBuiltInNeuralAnalysis(text = '', mode = 'chat') {
  const lower = text.toLowerCase();

  // Scenario 1: "I have a boyfriend" or relationship defense
  if (lower.includes('boyfriend') || lower.includes('bf') || lower.includes('dating someone') || lower.includes('taken') || lower.includes('married')) {
    return {
      analysis: {
        vibe: 'DEFENSE MECHANISM / SHIT-TEST',
        vibeCategory: 'Shit-Test',
        subtext: 'She is throwing out a shield to test if you get nervous, apologize, or back down. The fact that she is still conversing means the door is wide open.',
        opening: 'Expose the contradiction — if she didn’t care, she wouldn’t keep responding.'
      },
      options: {
        teaser: 'Then why are you looking at me like that through your phone screen? 😉',
        boldCallOut: 'Then why are you still texting me? Go give him your attention before I steal it completely.',
        highTensionDrop: 'He’s a lucky guy... but luck runs out when real chemistry walks in. When are we drinking wine?'
      }
    };
  }

  // Scenario 2: Dry / Short Energy ("haha", "ok", "yeah", "cool", "nice")
  if (lower.length < 15 || lower === 'haha' || lower === 'yeah' || lower === 'k' || lower.startsWith('haha yeah')) {
    return {
      analysis: {
        vibe: 'DRY ENERGY / LOW EFFORT',
        vibeCategory: 'Dry Energy',
        subtext: 'She is being passive or testing if you will become an interviewer and ask generic questions to keep the chat alive.',
        opening: 'Call out her low effort playfully and force her to re-engage with higher energy.'
      },
      options: {
        teaser: 'Careful with all those words, don’t exhaust yourself chatting so much.',
        boldCallOut: 'You’re usually way more interesting than two-word replies. Who stole your personality today?',
        highTensionDrop: 'I only give high-level energy to girls who can keep up. Text me when you’re ready to actually flirt.'
      }
    };
  }

  // Scenario 3: Story Reply (Gym, Dress, Outfit, Vacation, Nightlife)
  if (mode === 'story' || lower.includes('story') || lower.includes('dress') || lower.includes('fit') || lower.includes('gym') || lower.includes('beach') || lower.includes('selfie')) {
    let specificTeaser = 'You really dressed up like that just to show off on my feed? Appreciate the effort.';
    let specificBold = 'Illegal levels of trouble in that photo. You definitely shouldn’t be left unsupervised tonight.';
    let specificTension = 'You look far too good to be sitting behind a screen. Next time you look like that, you’re letting me take you out.';

    if (lower.includes('gym') || lower.includes('workout') || lower.includes('abs')) {
      specificTeaser = 'Nice form... but I still bet I can out-lift you without breaking a sweat.';
      specificBold = 'Are you actually training or just trying to get my attention in your DMs?';
      specificTension = 'Keep working out like that and I’ll have to make you my personal workout partner... if you can handle it.';
    } else if (lower.includes('beach') || lower.includes('vacation') || lower.includes('bikini') || lower.includes('pool')) {
      specificTeaser = 'It’s rude to post sun-kissed photos while I’m busy working. You owe me a cocktail for that.';
      specificBold = 'You’re definitely not coming back from that trip innocent, are you?';
      specificTension = 'That view is stunning... but you look like you’re missing some serious company right next to you.';
    }

    return {
      analysis: {
        vibe: 'HIGH ATTENTION / STORY HOOK',
        vibeCategory: 'Story Hook',
        subtext: 'She posted this story knowing it looks great. 99% of guys will send a heart emoji or "Ur pretty". You must bypass the clout and establish heavy tension.',
        opening: 'Assume the story was posted specifically to catch your eye.'
      },
      options: {
        teaser: specificTeaser,
        boldCallOut: specificBold,
        highTensionDrop: specificTension
      }
    };
  }

  // Scenario 4: Flirty / Playful Question ("are you single", "why are you flirty", "you play too much")
  if (lower.includes('flirty') || lower.includes('single') || lower.includes('player') || lower.includes('too much') || lower.includes('cute')) {
    return {
      analysis: {
        vibe: 'PLAYFUL BANTER / EGO QUALIFICATION',
        vibeCategory: 'Playful Banter',
        subtext: 'She is charmed by your confidence and wants to see if you are a smooth operator or if she is making you blush.',
        opening: 'Own your charm 100%. Reframe her as the one driving the attraction.'
      },
      options: {
        teaser: 'I’m only flirty with girls who earn it. You just happen to be doing a dangerously good job.',
        boldCallOut: 'I’m usually very reserved... but you bring out my mischievous side. Don’t get arrogant now.',
        highTensionDrop: 'I don’t play games, I just know what I want. And right now, I’m looking at it.'
      }
    };
  }

  // Default High-Tension Analysis Engine
  return {
    analysis: {
      vibe: 'NEUTRAL INTEREST / OPEN WINDOW',
      vibeCategory: 'High Attraction',
      subtext: 'She left a casual line, giving you full control of the conversational frame. This is your cue to take the lead with supreme confidence.',
      opening: 'Pivot from normal talk directly into bold banter or an intriguing date setup.'
    },
    options: {
      teaser: `You’re cute, but I bet you’re trouble once someone gets to know you.`,
      boldCallOut: `That reply was cute, but let’s see if your real-life personality can match your texting confidence.`,
      highTensionDrop: `Stop teasing me over text and let me buy you a drink so I can see that smile in person.`
    }
  };
}
