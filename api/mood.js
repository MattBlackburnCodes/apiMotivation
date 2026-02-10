export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    const mood = {
        motivate: [
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
        ],
        calm: [
            { id: 1, q: "Breathe in slowly. You are safe in this moment." },
            { id: 2, q: "Nothing needs to be solved right now." },
            { id: 3, q: "Let your shoulders drop. You don’t need to carry everything." },
            { id: 4, q: "Peace begins the moment you stop forcing answers." },
            { id: 5, q: "Slow down. Your nervous system will thank you." },
            { id: 6, q: "This moment is allowed to be quiet." },
            { id: 7, q: "You are not behind. You are right here." },
            { id: 8, q: "Calm is not the absence of chaos, but your response to it." },
            { id: 9, q: "Unclench your jaw. Relax your breath." },
            { id: 10, q: "Stillness is productive too." },

            { id: 11, q: "You don’t need to rush to be worthy." },
            { id: 12, q: "Peace comes from letting things unfold naturally." },
            { id: 13, q: "Your breath is an anchor. Use it." },
            { id: 14, q: "It’s okay to pause without a reason." },
            { id: 15, q: "Nothing important is asking you to panic." },
            { id: 16, q: "Gentle progress is still progress." },
            { id: 17, q: "Release what you can’t control." },
            { id: 18, q: "Quiet moments restore loud minds." },
            { id: 19, q: "You are allowed to move at your own pace." },
            { id: 20, q: "Ease is a skill you can practice." },

            { id: 21, q: "You don’t have to think your way out of everything." },
            { id: 22, q: "Calm is choosing softness in a hard moment." },
            { id: 23, q: "Let today be simple." },
            { id: 24, q: "Your presence is enough." },
            { id: 25, q: "The answer can wait. Your peace can’t." },
            { id: 26, q: "Inhale calm. Exhale tension." },
            { id: 27, q: "Nothing bad happens when you slow your breathing." },
            { id: 28, q: "This moment doesn’t require perfection." },
            { id: 29, q: "Rest is not a reward — it’s a need." },
            { id: 30, q: "Peace grows where pressure fades." },

            { id: 31, q: "You are allowed to choose calm." },
            { id: 32, q: "Quiet confidence comes from trusting yourself." },
            { id: 33, q: "Not everything needs a reaction." },
            { id: 34, q: "Softness is strength too." },
            { id: 35, q: "The present moment is rarely as urgent as it feels." },
            { id: 36, q: "Let the day breathe with you." },
            { id: 37, q: "You don’t need permission to slow down." },
            { id: 38, q: "Calm arrives when you stop chasing certainty." },
            { id: 39, q: "Gentle thoughts create gentle days." },
            { id: 40, q: "Peace is found in acceptance, not control." },

            { id: 41, q: "You are safe to relax right now." },
            { id: 42, q: "Stillness helps you hear what matters." },
            { id: 43, q: "There is no rush in healing." },
            { id: 44, q: "Let this moment be enough." },
            { id: 45, q: "Calm is choosing clarity over chaos." },
            { id: 46, q: "Your breath knows how to guide you." },
            { id: 47, q: "Peace doesn’t ask for effort — only allowance." },
            { id: 48, q: "Slow moments create strong foundations." },
            { id: 49, q: "Nothing is wrong with taking your time." },
            { id: 50, q: "Right now, you are okay." }
        ],
        inspired: [
            { "id": 1, "q": "You are becoming stronger every time you refuse to quit." },
            { "id": 2, "q": "Even slow steps move you forward." },
            { "id": 3, "q": "You don’t need proof to believe in yourself — start anyway." },
            { "id": 4, "q": "Your effort today is shaping a better tomorrow." },
            { "id": 5, "q": "You are capable of more than you’ve allowed yourself to try." },

            { "id": 6, "q": "Growth begins the moment you stop doubting your worth." },
            { "id": 7, "q": "You don’t have to be fearless — just willing." },
            { "id": 8, "q": "Every challenge is teaching you something valuable." },
            { "id": 9, "q": "Your future self will thank you for not giving up." },
            { "id": 10, "q": "You are allowed to grow beyond who you used to be." },

            { "id": 11, "q": "Strength is built quietly, one choice at a time." },
            { "id": 12, "q": "You don’t need a new life — you need new habits." },
            { "id": 13, "q": "What you do today matters more than what you did yesterday." },
            { "id": 14, "q": "Believe in the version of you that keeps showing up." },
            { "id": 15, "q": "You are not starting over — you are starting wiser." },

            { "id": 16, "q": "Let effort be louder than doubt." },
            { "id": 17, "q": "You are closer to change than you realize." },
            { "id": 18, "q": "Progress doesn’t need permission." },
            { "id": 19, "q": "Your resilience is stronger than this moment." },
            { "id": 20, "q": "Keep building, even when the results feel distant." },

            { "id": 21, "q": "You grow every time you choose courage over comfort." },
            { "id": 22, "q": "The path forward becomes clearer when you keep moving." },
            { "id": 23, "q": "You are allowed to take up space in your own life." },
            { "id": 24, "q": "Trust the work you’re putting in." },
            { "id": 25, "q": "Your persistence is creating something meaningful." },

            { "id": 26, "q": "You don’t need everything figured out to move forward." },
            { "id": 27, "q": "What feels heavy now is making you stronger." },
            { "id": 28, "q": "You are becoming more capable with every challenge." },
            { "id": 29, "q": "Small steps can lead to powerful change." },
            { "id": 30, "q": "Your journey is unfolding exactly as it needs to." },

            { "id": 31, "q": "You have survived every hard day so far." },
            { "id": 32, "q": "Your effort has value, even when it goes unnoticed." },
            { "id": 33, "q": "You don’t need approval to believe in your direction." },
            { "id": 34, "q": "Your determination is building momentum." },
            { "id": 35, "q": "You are learning how strong you really are." },

            { "id": 36, "q": "Each day is a new opportunity to show up for yourself." },
            { "id": 37, "q": "You are allowed to hope again." },
            { "id": 38, "q": "Growth is happening, even when it feels quiet." },
            { "id": 39, "q": "You are capable of creating a life you’re proud of." },
            { "id": 40, "q": "Let today be proof that you didn’t give up." },

            { "id": 41, "q": "You don’t have to rush — just keep going." },
            { "id": 42, "q": "Your courage is stronger than your fear." },
            { "id": 43, "q": "You are building something meaningful, step by step." },
            { "id": 44, "q": "Your belief in yourself is growing — trust it." },
            { "id": 45, "q": "You are allowed to move forward at your own pace." },

            { "id": 46, "q": "You are stronger today than you were yesterday." },
            { "id": 47, "q": "Your effort is shaping the person you’re becoming." },
            { "id": 48, "q": "You are not defined by setbacks." },
            { "id": 49, "q": "Keep choosing progress over doubt." },
            { "id": 50, "q": "You are becoming the proof you once needed." }
        ]
    }

    res.status(200).json(mood);
}
