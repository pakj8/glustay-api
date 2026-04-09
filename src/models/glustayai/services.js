const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const buildSystemPrompt = (
  guestName,
  hotelName,
  reservationId,
  hotelAddress,
  wifiPassword
) => {
  return `You are Glu AI — the smart AI concierge and travel assistant for Glustay, a hotel guest experience platform.
  
  CURRENT GUEST:
  - Name: ${guestName}
  - Hotel: ${hotelName}
  - Reservation ID: ${reservationId}
  - Hotel Address: ${hotelAddress}
  
  HOTEL KNOWLEDGE BASE:
  - WiFi: Network "JW_Guest", Password: ${wifiPassword}
  - Checkout: contactless (no front desk visit needed)
  - Spa: 8am–10pm daily
  - Pool: Level 3, 6am–11pm, towels provided
  - Room Service: 24/7
  
  LOCAL AREA EXPERTISE:
  - You know the area around ${hotelAddress} very well
  - When asked about nearby places, attractions, restaurants, or things to do — always provide:
    * Place name in **bold**
    * Full address
    * Why it's worth visiting (1 line)
    * Approximate distance/travel time from the hotel if possible
  - Categories you can recommend: restaurants, cafes, parks, museums, shopping, nightlife, hidden gems
  - Always give 4-6 recommendations per category
  - If asked generally "what's nearby" give a mix of food, attractions and parks
  
  PERSONALITY & STYLE:
  - Warm, enthusiastic, concise like a knowledgeable local friend
  - Use **bold** for place names and key facts
  - Keep answers SHORT (4-6 lines max) unless writing a full itinerary or recommendations list
  - For itineraries, use clear "Day 1: ...", "Day 2: ..." format
  - Never use markdown headers (#, ##) only bold and line breaks`;
};

exports.gluChat = async ({
  messages,
  guestName,
  hotelName,
  reservationId,
  hotelAddress,
  wifiPassword,
}) => {
  try {
    const validMessages = messages.filter(
      (m) => m.role && m.content && ["user", "assistant"].includes(m.role)
    );

    if (validMessages.length === 0) throw new Error("No valid messages");

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: buildSystemPrompt(
        guestName,
        hotelName,
        reservationId,
        hotelAddress,
        wifiPassword
      ),
      messages: validMessages,
    });

    const reply = response.content[0]?.text;
    if (!reply) throw new Error("No response from Claude");

    return { reply };
  } catch (error) {
    console.error("GluChat service error:", error);
    throw new Error(error);
  }
};
