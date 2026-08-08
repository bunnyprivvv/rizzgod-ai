// Master Playbook & Cheatsheet Vault for RIZZGOD AI

export const SCENARIO_PRESETS = [
  {
    id: 'bf-test-1',
    title: 'The "I Have a Boyfriend" Test',
    category: 'Shit-Test',
    girlText: 'Haha you are cute but I have a boyfriend lol',
    context: 'Direct DM / Flirty conversation',
    analysis: {
      vibe: 'DEFENSE MECHANISM / BOUNDARY TEST',
      vibeCategory: 'Shit-Test',
      subtext: 'She is testing if you break frame, apologize, or act desperate. The "lol" and calling you "cute" proves high initial attraction.',
      opening: 'Capitalize on the fact that she complimenting you while mentioning him — prove her focus is on you.'
    },
    options: {
      teaser: 'Then why are you looking at me like that through your screen? 😉',
      boldCallOut: 'Then why are you still texting me? You should probably go give him your attention before I steal it completely.',
      highTensionDrop: 'He’s a lucky guy... but luck runs out when real chemistry walks in. When are we getting coffee?'
    }
  },
  {
    id: 'dry-text-1',
    title: 'Dry Single-Word Reply ("Haha yeah")',
    category: 'Low Energy',
    girlText: 'haha yeah',
    context: 'Recent chat after you asked a normal question',
    analysis: {
      vibe: 'DRY / EFFORT DROP',
      vibeCategory: 'Dry Energy',
      subtext: 'She is giving minimal effort. Never respond with an interview question or match her boring energy. Re-frame with playful arrogance.',
      opening: 'Tease her lack of vocabulary or challenge her to step up.'
    },
    options: {
      teaser: 'Careful with all those words, don’t exhaust yourself chatting so much.',
      boldCallOut: 'You’re usually way more interesting than two-word replies. Who stole your personality today?',
      highTensionDrop: 'I only give high-level energy to girls who can keep up. Text me when you’re ready to actually talk.'
    }
  },
  {
    id: 'story-outfit-1',
    title: 'Instagram Outfit / Mirror Selfie Story',
    category: 'Story Hook',
    girlText: '[Posted a stunning mirror selfie in a black dress / outfit]',
    context: 'Instagram Story',
    analysis: {
      vibe: 'ATTENTION HOOK / HIGH CONFIDENCE',
      vibeCategory: 'Story Hook',
      subtext: 'She knows she looks good and posted it for validation. Don’t send generic emojis (😍/🔥) like every other guy in her DMs.',
      opening: 'Comment on the vibe/attitude behind the photo, or accuse her of trying to get your attention.'
    },
    options: {
      teaser: 'You really wore that dress just to make my feed look better? Appreciate the effort.',
      boldCallOut: 'Illegal levels of trouble in that dress. You definitely shouldn’t be trusted on a Saturday night.',
      highTensionDrop: 'You look dangerous in black. Next time you dress like that, you’re letting me take you out properly.'
    }
  },
  {
    id: 'story-gym-1',
    title: 'Gym / Fitness Story',
    category: 'Story Hook',
    girlText: '[Posted a post-workout gym selfie or squat/lifting clip]',
    context: 'Instagram / Snapchat Story',
    analysis: {
      vibe: 'DISCIPLINE & FLEX',
      vibeCategory: 'Story Hook',
      subtext: 'She wants recognition for her hard work. Challenge her strength or tease her ego.',
      opening: 'Playful competition + subtle physical compliment.'
    },
    options: {
      teaser: 'Not bad form... but I still bet I can out-lift you without breaking a sweat.',
      boldCallOut: 'Are you actually working out or just trying to show off for my DMs?',
      highTensionDrop: 'Keep training like that and I’ll have to recruit you as my personal training partner... if you can handle it.'
    }
  },
  {
    id: 'story-vacation-1',
    title: 'Beach / Pool / Vacation Story',
    category: 'Story Hook',
    girlText: '[Posted a bikini / pool / tropical sunset photo with a drink]',
    context: 'Instagram Story',
    analysis: {
      vibe: 'VACATION HIGHLIGHT / SUN-KISSED',
      vibeCategory: 'Story Hook',
      subtext: 'She is relaxed and feeling attractive. High-tension compliments with playful demands work best.',
      opening: 'Accuse her of making your day harder or demand a souvenir.'
    },
    options: {
      teaser: 'It’s actually rude to post sunless envy while I’m working. You owe me a cocktail.',
      boldCallOut: 'You’re definitely not coming back from that trip innocent, are you?',
      highTensionDrop: 'That view is almost as stunning as you... but you look like you’re missing some serious company.'
    }
  },
  {
    id: 'test-single-1',
    title: 'The "Are you always this flirty?" Test',
    category: 'Shit-Test',
    girlText: 'Are you always this flirty with everyone or just me?',
    context: 'Mid-chat after banter',
    analysis: {
      vibe: 'QUALIFICATION TEST / EGO CHECK',
      vibeCategory: 'Shit-Test',
      subtext: 'She wants to know if she is special or if you use line templates on every girl. Reframe it so she earned your attention.',
      opening: 'Reframe her as the one inspiring your charm.'
    },
    options: {
      teaser: 'Only girls who earn it. You just happen to be doing a dangerously good job.',
      boldCallOut: 'I’m usually very reserved... but you’re bringing out my mischievous side. Don’t get arrogant.',
      highTensionDrop: 'I only turn on the charm when a girl genuinely intrigues me. Take it as a compliment.'
    }
  }
];

export const EXPANDED_PLAYBOOK_CATEGORIES = [
  {
    id: 'bf-tests',
    title: '1. The "I Have A Boyfriend / Taken" Deflection Matrix',
    categoryTag: 'Boyfriend Tests',
    rule: 'NEVER say "My bad", "Sorry", or ask about him. Flip the frame so she has to explain why she is still chatting with you.',
    lines: [
      { line: 'Then why are you looking at me like that through your screen?', tag: 'Teaser Hook' },
      { line: 'Then why are you still texting me? You should go give him your attention before I steal it completely.', tag: 'Bold Call-Out' },
      { line: 'Good thing I’m not asking to be your boyfriend, just your favorite distraction.', tag: 'High Tension' },
      { line: 'He’s a lucky guy... but luck runs out when real chemistry walks in. When are we getting coffee?', tag: 'Date Escalation' },
      { line: 'Then why did you reply in 2 seconds? Your subconscious is betraying you.', tag: 'Psychological Flip' },
      { line: 'I’m not looking to replace him today, just to buy a drink for a girl who caught my eye.', tag: 'Direct Frame' },
      { line: 'Is he as interesting as you, or did you text me to make up for the boredom?', tag: 'Bold Challenge' }
    ]
  },
  {
    id: 'dry-texts',
    title: '2. Handling Dry Single-Word Texters ("k", "haha yeah", "ok")',
    categoryTag: 'Dry Energy',
    rule: 'NEVER ask generic interview questions ("How was your day?"). Send a bold accusation or challenge her effort immediately.',
    lines: [
      { line: 'Careful with all those words, don’t exhaust yourself chatting so much.', tag: 'Teaser' },
      { line: 'You’re usually way more interesting than two-word replies. Who stole your personality today?', tag: 'Bold Call-Out' },
      { line: 'I only give high-level energy to girls who can keep up. Text me when you’re ready to actually talk.', tag: 'High Tension' },
      { line: 'Are you always this quiet, or are you just intimidated by my charm?', tag: 'Frame Challenge' },
      { line: 'I’m going to need you to bring at least 50% more effort to this conversation.', tag: 'Direct Demand' },
      { line: 'That reply was so dry I need a glass of water just reading it.', tag: 'Humor Call-Out' }
    ]
  },
  {
    id: 'story-masterclass',
    title: '3. Instagram & Snapchat Story Reply Hooks (Zero Emojis)',
    categoryTag: 'Story Hooks',
    rule: 'NEVER send single emojis (😍/🔥/🙌). Comment on her attitude, accuse her of seeking attention, or issue a bold date demand.',
    lines: [
      { line: 'You really wore that outfit just to make my Instagram feed look better? Appreciate the effort.', tag: 'Outfit Selfie' },
      { line: 'Illegal levels of trouble in that photo. You definitely shouldn’t be left unsupervised tonight.', tag: 'Nightlife / Outfit' },
      { line: 'It’s actually rude to post sun-kissed vacation photos while I’m working. You owe me a cocktail.', tag: 'Beach / Trip' },
      { line: 'Not bad gym form... but I still bet I can out-lift you without breaking a sweat.', tag: 'Gym Workout' },
      { line: 'You shouldn’t be posting moody selfies at 1 AM unless you’re inviting me over to share the vibe.', tag: 'Late Night 1 AM' },
      { line: 'That smile looks like a dangerous secret. What are you up to?', tag: 'Close-up Selfie' },
      { line: 'Save a drink for me. Because if I was at that bar, we wouldn’t be sitting at separate tables.', tag: 'Drinks / Night Out' }
    ]
  },
  {
    id: 'arrogant-player-tests',
    title: '4. Handling "Are You A Player?" / "Are You Always This Flirty?"',
    categoryTag: 'Shit-Test',
    rule: 'NEVER get defensive or deny it frantically. Own your confidence 100% and reframe her as the one driving the attraction.',
    lines: [
      { line: 'I’m only flirty with girls who earn it. You just happen to be doing a dangerously good job.', tag: 'Teaser' },
      { line: 'I’m usually very reserved... but you bring out my mischievous side. Don’t get arrogant now.', tag: 'Bold Reframe' },
      { line: 'I don’t play games, I just know what I want. And right now, I’m looking at it.', tag: 'High Tension' },
      { line: 'If being confident makes me a player, then guilty as charged.', tag: 'Unapologetic' },
      { line: 'Are you trying to figure out if you’re special, or are you just trying to get me to compliment you?', tag: 'Psychological Flip' }
    ]
  },
  {
    id: 'date-escalation',
    title: '5. The Date Escalation Matrix (Closing the Deal)',
    categoryTag: 'Date Escalation',
    rule: 'Never ask "Would you maybe want to get coffee sometime?". State a specific day, time, and vibe with supreme confidence.',
    lines: [
      { line: 'You’re cute over text, but let’s see if your real-life personality can keep up. Drinks on Thursday at 8 PM?', tag: 'Direct Close' },
      { line: 'Stop teasing me through a screen. What’s your number? I’m taking you out this week.', tag: 'Number Grab' },
      { line: 'I have a rule: 5 good messages max before we drink wine in person. When are you free?', tag: 'High Tension' },
      { line: 'Send me your number. Texting is for amateurs, let’s make real plans.', tag: 'Bold Demand' },
      { line: 'I’m grabbing cocktails at a spot you’ll love this Friday. You’re joining me.', tag: 'Assumption of Value' }
    ]
  },
  {
    id: 'ghosting-revival',
    title: '6. Reviving Dead Chats / Handling Ghosting',
    categoryTag: 'Ghost Revival',
    rule: 'Never send "Hey did you get my text?" or "Why did you stop replying?". Send a hilarious bold accusation.',
    lines: [
      { line: 'You disappeared. Did you get kidnapped or did you just get intimidated by my charm?', tag: 'Teaser' },
      { line: 'I just saw someone who reminded me of you... but they had much better texting manners.', tag: 'Playful Jab' },
      { line: 'Admit it, you spent the last 3 days missing me.', tag: 'High Tension Arrogance' },
      { line: 'I’m giving you one second chance to redeem your texting score.', tag: 'Frame Reset' }
    ]
  },
  {
    id: 'flake-recovery',
    title: '7. Handling Last-Minute Date Cancels / Flakes',
    categoryTag: 'Flake Recovery',
    rule: 'Never sound hurt or angry ("That sucks, okay..."). Stay unbothered and re-prioritize your time with total ease.',
    lines: [
      { line: 'No worries at all. Now I get to hit my favorite steakhouse with my friends instead. We’ll reschedule when your calendar clears up.', tag: 'High-Value Unbothered' },
      { line: 'All good! You owe me double drinks next time for breaking our streak.', tag: 'Playful Penalty' },
      { line: 'No stress. Hope everything is good on your end. Hit me up when you’re less chaotic.', tag: 'Calm Boundary' }
    ]
  }
];
