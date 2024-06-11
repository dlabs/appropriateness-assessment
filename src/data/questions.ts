interface Question {
  label: string;
  type: "text" | "radio";
  options?: string[];
  description?: string;
  correct: number;
}

const questions: Question[] = [
  {
    label: "Is FinQuiz liable for your losses?",
    type: "radio",
    options: [
      "No, I trade at my own risk",
      "No, but FinQuiz will refund my losses",
      "Yes, FinQuiz is liable for my losses",
    ],
    correct: 1,
  },
  {
    label: "The nature of cryptoassets is...",
    type: "radio",
    options: [
      "Stable, only meme coins have risks and I do not need to know what they are",
      "All the same for each coin so I do not need to do my own research",
      "Varying, each crypto asset class has specific risks and I should do my own research prior to investing",
    ],
    correct: 3,
  },
  {
    label:
      "What protection is provided in the event that you incur losses while trading cryptoassets?",
    type: "radio",
    options: [
      "FinQuiz will return my funds",
      "My investment is protected by the Financial Services Compensation Scheme",
      "None, I am liable for any losses",
    ],
    correct: 3,
  },
  {
    label: "Investing in cryptoassets is...",
    type: "radio",
    options: [
      "A risk-free opportunity that is likely to bring a high return",
      "A popular thing to do so is unlikely to have any risks",
      "A high-risk investment and I must understand the risks prior to investing",
    ],
    correct: 3,
  },
  {
    label: "When thinking of investing in cryptoassets you should...",
    type: "radio",
    options: [
      "Only invest money I can afford to lose",
      "Invest as much as possible",
      "Cash in my pension as returns are guaranteed",
    ],
    correct: 1,
  },
  {
    label: "If my cryptoassets are lost, I am guaranteed to get my money back:",
    type: "radio",
    options: ["False", "True, up to 50% of it", "True, up to 100% of it"],
    correct: 1,
  },
  {
    label: "What does FinQuiz do on behalf of clients?",
    type: "radio",
    options: [
      "Conducts due diligence on all underlying investments",
      "Provides market analysis but does not conduct due diligence on all underlying investments",
      "Guarantees profits on all investments",
    ],
    correct: 2,
  },
  {
    label:
      "What is the nature of your rights and obligations when investing in cryptoassets with FinQuiz?",
    type: "radio",
    options: [
      "I have full legal and beneficial ownership with no risks",
      "I understand the legal and beneficial ownership and the associated risks",
      "FinQuiz owns the assets and I have no ownership rights",
    ],
    correct: 2,
  },
  {
    label: "Can you lose all the money you invest in a qualifying cryptoasset?",
    type: "radio",
    options: [
      "No, cryptoassets are a safe investment",
      "Yes, there is a risk of losing all the money invested",
      "Only if the market crashes",
    ],
    correct: 2,
  },
  {
    label: "How complex can investments in qualifying cryptoassets be?",
    type: "radio",
    options: [
      "Simple and easy to understand with minimal risks",
      "Potentially complex with significant risks that are difficult to understand",
      "No more complex than traditional investments",
    ],
    correct: 2,
  },
  {
    label: "How volatile can the performance of qualifying cryptoassets be?",
    type: "radio",
    options: [
      "Very volatile, values can fall as quickly as they rise",
      "Stable, with predictable performance",
      "Slightly volatile, but generally stable",
    ],
    correct: 1,
  },
  {
    label: "What operational risks can affect your cryptoassets?",
    type: "radio",
    options: [
      "None, operational risks are minimal",
      "Risks such as cyber-attacks, loss of private keys, and financial crime",
      "Only risks related to market performance",
    ],
    correct: 2,
  },
  {
    label: "What happens if FinQuiz becomes insolvent?",
    type: "radio",
    options: [
      "My investment is completely safe",
      "There are risks to the management and administration of my investment",
      "FinQuiz guarantees the safety of my investment even if it becomes insolvent",
    ],
    correct: 2,
  },
  {
    label: "Can you easily sell your qualifying cryptoasset investment?",
    type: "radio",
    options: [
      "Yes, there is always a market for cryptoassets",
      "No, there may be market illiquidity or operational outages",
      "Yes, but only during certain market conditions",
    ],
    correct: 2,
  },
  {
    label:
      "What is the regulated status of FinQuiz in relation to FCA regulation?",
    type: "radio",
    options: [
      "Fully regulated by the FCA for all activities",
      "Partially regulated with some activities unregulated",
      "Not regulated by the FCA",
    ],
    correct: 2,
  },
  {
    label:
      "To what extent does the Financial Ombudsman Service or FSCS protect your investment?",
    type: "radio",
    options: [
      "Fully protects against any loss or poor investment performance",
      "Provides no protection against poor investment performance",
      "Partially protects but does not cover unauthorised persons",
    ],
    correct: 3,
  },
  {
    label:
      "Is investing in qualifying cryptoassets comparable to mainstream investments?",
    type: "radio",
    options: [
      "Yes, they are similar to listed or exchange-traded securities",
      "No, they are not comparable to mainstream investments",
      "Somewhat, but with higher risks",
    ],
    correct: 2,
  },
  {
    label: "What is the benefit of diversification in investing?",
    type: "radio",
    options: [
      "There is no need for diversification",
      "Diversification helps spread risk and retail clients should not invest more than 10% of their net assets in restricted mass market investments",
      "Only invest in one type of asset for better returns",
    ],
    correct: 2,
  },
];

export default questions;
