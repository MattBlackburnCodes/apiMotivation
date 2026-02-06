export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    const motivation = [
        [
            { "id": 1, "q": "You don’t need a perfect plan — you need a first step." },
            { "id": 2, "q": "Small progress is still progress. Don’t downplay it." },
            { "id": 3, "q": "The version of you that started would be proud you kept going." },
            { "id": 4, "q": "Discipline is choosing what you want most over what you want now." },
            { "id": 5, "q": "You are not behind — you’re building." },
            { "id": 6, "q": "Momentum beats motivation every time." },
            { "id": 7, "q": "Today’s effort is tomorrow’s confidence." },
            { "id": 8, "q": "You don’t rise to your goals; you fall to your habits." },
            { "id": 9, "q": "Consistency looks boring, but it changes everything." },
            { "id": 10, "q": "Your future self is watching. Don’t let them down." },

            { "id": 11, "q": "Growth often feels uncomfortable because it means you’re outgrowing something." },
            { "id": 12, "q": "You don’t need permission to become better." },
            { "id": 13, "q": "Progress happens when excuses stop getting the last word." },
            { "id": 14, "q": "Some days are about winning. Others are about not quitting." },
            { "id": 15, "q": "Hard days don’t erase hard work." },
            { "id": 16, "q": "Confidence is built, not found." },
            { "id": 17, "q": "You are allowed to outgrow the life you once settled for." },
            { "id": 18, "q": "What you repeat becomes who you are." },
            { "id": 19, "q": "You don’t need more time — you need more focus." },
            { "id": 20, "q": "Be patient with results, but relentless with effort." },

            { "id": 21, "q": "The work you avoid today becomes the weight you carry tomorrow." },
            { "id": 22, "q": "You’re closer than your doubt wants you to believe." },
            { "id": 23, "q": "Success is often quiet. Keep showing up anyway." },
            { "id": 24, "q": "Your comfort zone won’t build your future." },
            { "id": 25, "q": "You don’t need to feel ready to start." },
            { "id": 26, "q": "Effort compounds, even when results don’t show immediately." },
            { "id": 27, "q": "Every disciplined choice is a vote for your future." },
            { "id": 28, "q": "You can rest without quitting." },
            { "id": 29, "q": "Don’t wait for motivation — act, and motivation will follow." },
            { "id": 30, "q": "What feels slow now will feel worth it later." },

            { "id": 31, "q": "Your goals don’t care how you feel today — show up anyway." },
            { "id": 32, "q": "Clarity comes from action, not overthinking." },
            { "id": 33, "q": "You’re not stuck — you’re learning what doesn’t work." },
            { "id": 34, "q": "Discomfort is often the price of growth." },
            { "id": 35, "q": "You don’t have to do everything. Just do something." },
            { "id": 36, "q": "Build habits that make quitting harder than continuing." },
            { "id": 37, "q": "You become powerful when you keep promises to yourself." },
            { "id": 38, "q": "The days you want to stop matter the most." },
            { "id": 39, "q": "Your effort today creates options tomorrow." },
            { "id": 40, "q": "Success favors the persistent, not the perfect." },

            { "id": 41, "q": "You don’t need a breakthrough — you need follow-through." },
            { "id": 42, "q": "Every hard season is shaping something stronger." },
            { "id": 43, "q": "The work counts, even when no one sees it." },
            { "id": 44, "q": "Stop waiting for the right mood. Discipline works in any mood." },
            { "id": 45, "q": "Your direction matters more than your speed." },
            { "id": 46, "q": "You’re building momentum with every small win." },
            { "id": 47, "q": "What you do daily matters more than what you do occasionally." },
            { "id": 48, "q": "You are capable of more than today’s doubt." },
            { "id": 49, "q": "Keep going — the version of you you’re becoming is worth it." },
            { "id": 50, "q": "One good decision can change the entire day." }
]
    ]

    res.status(200).json(motivation);
}
