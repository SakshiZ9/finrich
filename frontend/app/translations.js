// translations.js
import { I18n } from "i18n-js";

const i18n = new I18n();

i18n.translations = {
  en: {
    screenTitle: "Financial Literacy: Complete Guide",

    sections: {
      termsTitle: "Key Financial Terms",
      principlesTitle: "Five Principles of Financial Literacy",
      savingStrategiesTitle: "Basic Money-Saving Strategies",
      investmentMethodsTitle: "Investment Methods and Approaches",
      managingDebtTitle: "Managing Debt and Credit",
      planningGoalsTitle: "Financial Planning and Goal Setting",
    },

    terms: [
      { term: "Budget", definition: "A plan that outlines expected income and expenses over a period, used to manage money effectively." },
      { term: "Income", definition: "Money earned from work, business, investments, or other sources." },
      { term: "Expense", definition: "Money spent on goods, services, and other costs." },
      { term: "Savings", definition: "Portion of income not spent, often set aside for future use or emergencies." },
      { term: "Interest Rate", definition: "Percentage charged on borrowed money or earned on deposits/investments." },
      { term: "Compound Interest", definition: "Interest earned on both the initial principal and the interest that has been added to it." },
      { term: "Inflation", definition: "The gradual increase in prices over time, which reduces money's purchasing power." },
      { term: "Diversification", definition: "Spreading investments across different assets to reduce risk." },
      { term: "Mutual Fund", definition: "Investment vehicle pooling money from multiple investors to buy a diversified portfolio of stocks/bonds." },
      { term: "Stock", definition: "Ownership share in a company." },
      { term: "Bond", definition: "Debt investment where an investor loans money to an entity for fixed interest over time." },
      { term: "ETF (Exchange-Traded Fund)", definition: "A type of fund traded on stock exchanges, typically tracking an index." },
      { term: "401(k)", definition: "Employer-sponsored retirement savings plan in the U.S." },
      { term: "Systematic Investment Plan (SIP)", definition: "Regular, fixed investment into mutual funds to benefit from rupee cost averaging." },
      { term: "Loan", definition: "Borrowed money that must be repaid with interest." },
      { term: "Credit Score", definition: "Numerical representation of creditworthiness based on credit history." },
      { term: "Liquidity", definition: "How quickly an asset can be converted into cash without significant loss." },
      { term: "Risk Tolerance", definition: "An investor’s ability and willingness to endure losses on investments." },
      { term: "Index Fund", definition: "A mutual fund or ETF that aims to replicate the performance of a financial market index." },
      { term: "Public Provident Fund (PPF)", definition: "Long-term government-backed savings scheme popular in India with tax benefits." },
    ],

    principles: [
      "Earning: Manage your income, maximize workplace benefits, and live within your means.",
      "Saving and Investing: Set aside part of your income and use investment vehicles to grow wealth, with attention to risk and timelines.",
      "Borrowing and Managing Debt: Understand loans, interest, and strategies for debt repayment without stress.",
      "Spending and Planning: Budget wisely, track expenses, and align your spending with goals.",
      "Protecting Your Assets: Use insurance and risk management to safeguard your financial well-being.",
    ],

    principlesQuote: "Financial literacy isn’t just about knowledge – it’s about actionable skills that secure your present and future.",

    savingStrategies: [
      "Create and follow a budget to track income and expenses.",
      "Build an emergency fund covering 3–6 months of expenses for unforeseen situations.",
      "Live within your means to avoid unnecessary debt.",
      "Regularly review and cut unnecessary expenses like unused subscriptions.",
      "Set up automatic savings transfers to ensure you save consistently.",
      "Take advantage of employer benefits such as contribution matching in retirement plans.",
      "Be a smart shopper by comparing prices and using discounts/loyalty points.",
    ],

    investmentVehicles: [
      "Mutual Funds: Professionally managed, pooled investment for diversification.",
      "Index Funds and ETFs: Track broad market indexes; great for low cost and risk mitigation.",
      "Stocks: Shares in companies — higher risk and potentially higher reward.",
      "Bonds: Fixed interest debt instruments; lower risk than stocks.",
      "PPF and Government Schemes: Safe, government-backed savings (esp. in India), often with tax benefits.",
      "Fixed/Recurring Deposits: Guaranteed returns with low risk from banks.",
    ],

    investmentStrategies: [
      {
        strategy: "Buy and Hold",
        description: "Invest in and retain assets long-term to gain from growth and compounding.",
        suitableFor: "Beginners seeking simplicity and growth.",
      },
      {
        strategy: "Index Fund Strategy",
        description: "Invest primarily in low-cost index funds to match market returns.",
        suitableFor: "Those wanting diversity and low fees.",
      },
      {
        strategy: "“Index and a Few”",
        description: "Major portion in index funds with some individual stocks for extra gains.",
        suitableFor: "Investors happy to research individual stocks.",
      },
      {
        strategy: "Income Investing",
        description: "Focus on regular income generation via dividends and interest.",
        suitableFor: "Individuals needing reliable cash flow.",
      },
      {
        strategy: "Dollar-Cost Averaging",
        description: "Invest regular fixed sums to reduce market timing risk.",
        suitableFor: "Anyone wanting disciplined investing.",
      },
    ],

    investmentTips: [
      "Start early to maximize the power of compounding.",
      "Diversify across types of investments and sectors.",
      "Keep investment expenses and fees minimal.",
      "Invest regularly using SIPs or recurring contributions.",
      "Align investments with your specific goals and time horizons.",
    ],

    managingDebt: [
      "Differentiate between good debt (that builds value, e.g. education loan) and bad debt (e.g. high-interest credit cards).",
      "Understand interest rates, fees, and repayment terms.",
      "Prioritize repaying high-interest debt first.",
      "Maintain and monitor your credit score for loan eligibility and better rates.",
      "Develop a debt repayment strategy – paying off debt systematically reduces financial stress.",
    ],

    planningGoals: [
      "Define short-term (buy gadgets, vacation), medium-term (car, home down payment), and long-term (retirement) goals.",
      "Use budgeting to allocate funds toward these goals.",
      "Reassess and adjust plans as life circumstances change.",
      "Include retirement planning early using pension plans or retirement accounts.",
    ],
  },

  hi: {
    screenTitle: "वित्तीय साक्षरता: पूर्ण मार्गदर्शिका",

    sections: {
      termsTitle: "प्रमुख वित्तीय शब्दावली",
      principlesTitle: "वित्तीय साक्षरता के पाँच सिद्धांत",
      savingStrategiesTitle: "मूलभूत धन-बचत रणनीतियाँ",
      investmentMethodsTitle: "निवेश विधियाँ और दृष्टिकोण",
      managingDebtTitle: "ऋण और क्रेडिट का प्रबंधन",
      planningGoalsTitle: "वित्तीय योजना और लक्ष्य निर्धारण",
    },

    terms: [
      { term: "बजट", definition: "एक योजना जो किसी अवधि के दौरान अपेक्षित आय और व्यय को दर्शाती है, पैसे को प्रभावी ढंग से प्रबंधित करने के लिए।" },
      { term: "आय", definition: "काम, व्यापार, निवेश या अन्य स्रोतों से अर्जित धन।" },
      { term: "खर्च", definition: "वस्तुओं, सेवाओं और अन्य खर्चों पर खर्च किया गया पैसा।" },
      { term: "बचत", definition: "आय का वह भाग जो खर्च नहीं किया गया हो, अक्सर भविष्य या आपातकालीन स्थिति के लिए सुरक्षित रखा जाता है।" },
      { term: "सूचक दर", definition: "उधार ली गई धनराशि पर लगाई गई या जमा/निवेशों पर प्राप्त की गई प्रतिशत दर।" },
      { term: "चक्रवृद्धि ब्याज", definition: "ब्याज जो मूलधन और पहले से जुड़े ब्याज दोनों पर प्राप्त होता है।" },
      { term: "मुद्रास्फीति", definition: "समय के साथ कीमतों में धीरे-धीरे वृद्धि, जिससे धन की खरीद शक्ति घटती है।" },
      { term: "विविधीकरण", definition: "जोखिम कम करने के लिए निवेशों को विभिन्न संपत्तियों में फैलाना।" },
      { term: "म्युचुअल फंड", definition: "कई निवेशकों से जमा किए गए धन को एक साथ निवेशित करने वाला साधन।" },
      { term: "स्टॉक", definition: "किसी कंपनी का स्वामित्व शेयर।" },
      { term: "बॉन्ड", definition: "ऋण निवेश जिसमें निवेशक एक संस्था को धन उधार देता है और निश्चित ब्याज प्राप्त करता है।" },
      { term: "ईटीएफ (एक्सचेंज ट्रेडेड फंड)", definition: "एक प्रकार का फंड जो स्टॉक एक्सचेंजों पर ट्रेड होता है और आमतौर पर किसी सूचकांक का अनुसरण करता है।" },
      { term: "401(k)", definition: "यू.एस. में नियोक्ता द्वारा प्रायोजित सेवानिवृत्ति बचत योजना।" },
      { term: "सिस्टमेटिक निवेश योजना (SIP)", definition: "म्युचुअल फंड में नियमित, निश्चित निवेश जिससे औसत लागत पर निवेश किया जाता है।" },
      { term: "ऋण", definition: "उधार लिया हुआ धन जिसे ब्याज के साथ चुकाना होता है।" },
      { term: "क्रेडिट स्कोर", definition: "ऐसा अंक जो एक व्यक्ति की क्रेडिट योग्यता को दर्शाता है।" },
      { term: "तरलता", definition: "किसी संपत्ति को बिना नुकसान के तुरंत नकदी में परिवर्तित करने की क्षमता।" },
      { term: "जोखिम सहिष्णुता", definition: "निवेशक की क्षमताएँ और इच्छाएँ जो निवेश में हानि सहने के लिए होती हैं।" },
      { term: "सूचकांक फंड", definition: "म्युचुअल फंड या ईटीएफ जो किसी वित्तीय बाजार सूचकांक का प्रदर्शन दोहराता है।" },
      { term: "सार्वजनिक भविष्य निधि (PPF)", definition: "भारत में लोकप्रिय दीर्घकालिक सरकारी बचत योजना जिसमें कर लाभ होते हैं।" },
    ],

    principles: [
      "कमाई: अपनी आय का प्रबंधन करें, कार्यस्थल के लाभों का अधिकतम उपयोग करें, और अपनी आय के अनुसार जीवन जिएं।",
      "बचत और निवेश: अपनी आय का एक हिस्सा सुरक्षित रखें और जोखिम तथा समय के अनुसार निवेश करें।",
      "ऋण लेना और प्रबंधन: ऋण के प्रकारों, ब्याज दरों को समझें और बिना तनाव के ऋण का निपटारा करें।",
      "खर्च और योजना: समझदारी से बजट बनाएं, खर्चों को ट्रैक करें और अपने लक्ष्य से खर्चों को मिलाएं।",
      "अपनी संपत्ति की सुरक्षा: बीमा और जोखिम प्रबंधन के माध्यम से अपनी वित्तीय भलाई की रक्षा करें।",
    ],

    principlesQuote: "वित्तीय साक्षरता मात्र ज्ञान नहीं है – यह कार्यकारी कौशल है जो वर्तमान और भविष्य को सुरक्षित करता है।",

    savingStrategies: [
      "आय और खर्च को ट्रैक करने के लिए बजट बनाएं और उसका पालन करें।",
      "3-6 महीने के खर्चों के बराबर आपातकालीन निधि बनाएं।",
      "अपने संसाधनों के भीतर जीवन यापन करें ताकि अनावश्यक ऋण न हो।",
      "अनावश्यक खर्चों जैसे अप्रयुक्त सदस्यता को नियमित रूप से समीक्षा करें और बंद करें।",
      "नियमित बचत के लिए स्वचालित स्थानान्तरण सेट करें।",
      "नियोक्ता के लाभों का पूरा लाभ उठाएं जैसे सेवानिवृत्ति योजना में योगदान।",
      "मूल्य तुलना करके स्मार्ट खरीददारी करें और छूट/लॉयल्टी पॉइंट्स का उपयोग करें।",
    ],

    investmentVehicles: [
      "म्युचुअल फंड: पेशेवर रूप से संचालित, विविधीकरण के लिए एकत्रित निवेश।",
      "सूचकांक फंड और ईटीएफ: व्यापक बाजार सूचकांक को ट्रैक करते हैं; कम लागत और कम जोखिम के लिए।",
      "स्टॉक: कंपनियों के शेयर — उच्च जोखिम पर उच्च रिटर्न।",
      "बॉन्ड: निश्चित ब्याज वाले ऋण निवेश; स्टॉक की तुलना में कम जोखिम।",
      "पीपीएफ और सरकारी योजनाएं: सुरक्षित, भारत में लोकप्रिय दीर्घकालिक बचत योजना।",
      "फिक्स्ड/रिकरिंग डिपॉजिट: बैंक से कम जोखिम और निश्चित रिटर्न।",
    ],

    investmentStrategies: [
      {
        strategy: "खरीदें और रखें",
        description: "लंबे समय तक निवेश बनाए रखें और वृद्धि और चक्रवृद्धि ब्याज का लाभ उठाएं।",
        suitableFor: "सरल और दीर्घकालिक निवेश चाहने वाले।",
      },
      {
        strategy: "सूचकांक निधि रणनीति",
        description: "कम लागत वाले सूचकांक निधियों में निवेश करें जो बाजार के समान प्रदर्शन करें।",
        suitableFor: "विविधीकरण और कम शुल्क चाहने वाले।",
      },
      {
        strategy: "“सूचकांक और कुछ”",
        description: "अधिकांश धन सूचकांक निधि में और कुछ व्यक्तिगत स्टॉक्स में निवेश।",
        suitableFor: "जो व्यक्तिगत स्टॉक्स का अध्ययन करना चाहते हैं।",
      },
      {
        strategy: "आय निवेश",
        description: "नियमित आय के लिए लाभांश और ब्याज वाले निवेशों पर ध्यान।",
        suitableFor: "नियमित नकदी प्रवाह चाहने वाले।",
      },
      {
        strategy: "डॉलर-कॉस्ट एवरेजिंग",
        description: "नियमित निश्चित राशि का निवेश करें, जिससे बाजार उतार-चढ़ाव का जोखिम कम हो।",
        suitableFor: "अनुशासित निवेशक।",
      },
    ],

    investmentTips: [
      "जल्दी शुरू करें ताकि चक्रवृद्धि लाभ बढ़ सके।",
      "विभिन्न प्रकार के निवेश और सेक्टर में विविधीकरण करें।",
      "निवेश शुल्क और लागत न्यूनतम रखें।",
      "नियमित निवेश करें जैसे SIP।",
      "अपने लक्ष्यों और समय सीमा के अनुसार निवेश चुनें।",
    ],

    managingDebt: [
      "अच्छे ऋण (जैसे शिक्षा ऋण) और बुरे ऋण (जैसे उच्च ब्याज वाले क्रेडिट कार्ड) के बीच अंतर समझें।",
      "ब्याज दरों, शुल्क और पुनर्भुगतान शर्तों को समझें।",
      "उच्च ब्याज वाले ऋण का प्राथमिकता से भुगतान करें।",
      "क्रेडिट स्कोर को बनाए रखें और निगरानी करें।",
      "ऋण निपटान के लिए रणनीति विकसित करें।",
    ],

    planningGoals: [
      "छोटे (इलेक्ट्रॉनिक्स, यात्रा), मध्यम (कार, घर की अग्रिम भुगतान) और लंबे समय के (सेवानिवृत्ति) लक्ष्य निर्धारित करें।",
      "बजट बनाकर इन लक्ष्यों के लिए धन आवंटित करें।",
      "जीवन परिस्थितियों में बदलाव के अनुसार योजना पुनर्मूल्यांकन करें।",
      "जल्दी सेवानिवृत्ति योजना बनाएं।",
    ],
  },

  mr: {
    screenTitle: "आर्थिक साक्षरता: संपूर्ण मार्गदर्शक",

    sections: {
      termsTitle: "महत्त्वाचे आर्थिक शब्द",
      principlesTitle: "आर्थिक साक्षरतेचे पाच तत्त्वे",
      savingStrategiesTitle: "मूलभूत बचत धोरणे",
      investmentMethodsTitle: "गुंतवणुकीच्या पद्धती आणि दृष्टिकोन",
      managingDebtTitle: "कर्ज व्यवस्थापन आणि क्रेडिट",
      planningGoalsTitle: "आर्थिक नियोजन आणि लक्ष्य निर्धारण",
    },

    terms: [
      { term: "बजेट", definition: "एक योजना जी अपेक्षित उत्पन्न व खर्च स्पष्ट करते आणि आर्थिक व्यवस्थापन सुलभ करते." },
      { term: "उत्पन्न", definition: "काम, व्यवसाय, गुंतवणूक किंवा इतर स्रोतांमधून मिळणारा पैसा." },
      { term: "खर्च", definition: "सामग्री, सेवा किंवा इतर बाबींवर खर्च केलेला पैसा." },
      { term: "बचत", definition: "उत्पन्नाचा खर्च न केलेला भाग जो भविष्यासाठी साठवलेला असतो." },
      { term: "व्याजदर", definition: "कर्जावर किंवा गुंतवणुकीवर आकारल्या जाणाऱ्या टक्केवारी." },
      { term: "चक्रवृद्धी व्याज", definition: "मूळ रक्कम आणि आधीच्या व्याजावर देखील मिळणारा व्याज." },
      { term: "मुद्रास्फीती", definition: "किंमतीच्या वाढीमुळे पैशाची खरेदी शक्ती कमी होणे." },
      { term: "विविधीकरण", definition: "जोखीम कमी करण्यासाठी गुंतवणुकीची विभागणी." },
      { term: "म्युचुअल फंड", definition: "अनेक गुंतवणूकदारांचे पैसे एकत्र करून केलेली गुंतवणूक." },
      { term: "शेअर", definition: "कंपनीतील मालकीचा तुकडा." },
      { term: "बॉण्ड", definition: "कर्जपत्र ज्यावर निश्चित व्याज मिळते." },
      { term: "ईटीएफ", definition: "एक प्रकारचा वित्तीय फंड जो स्टॉक बाजारात व्यापार करतो." },
      { term: "४०१(के)", definition: "यू.एस. मधील नियोक्त्यामार्फत चालवलेली निवृत्ती योजना." },
      { term: "सिस्टमॅटिक इन्व्हेस्टमेंट प्लॅन", definition: "नियमित ठराविक रक्कम गुंतवणूक करण्याची योजना." },
      { term: "कर्ज", definition: "व्याजासह परत फेडण्याची रक्कम." },
      { term: "क्रेडिट स्कोर", definition: "कर्ज घेण्याच्या क्षमतेचे मापक." },
      { term: "तरलता", definition: "मालमत्तेला सहज आणि लवकर रोख रकमेमध्ये रूपांतर करण्याची क्षमता." },
      { term: "जोखीम सहनशीलता", definition: "जोखीम सहन करण्याची क्षमता." },
      { term: "इंडेक्स फंड", definition: "विशिष्ट बाजार निर्देशांकाचा अनुकरण करणारा गुंतवणूक फंड." },
      { term: "पीपीएफ", definition: "दीर्घकालीन सरकारी बचत योजना." },
    ],

    principles: [
      "उत्पन्न व्यवस्थापन करा, नोकरीतील लाभ घ्या, आणि खर्च मर्यादित ठेवा.",
      "बचत करा आणि जोखमीचे मूल्यांकन करून गुंतवणूक करा.",
      "कर्ज समजून घ्या आणि ते नीट व्यवस्थापित करा.",
      "बजेट बनवा आणि खर्चावर नियंत्रण ठेवा.",
      "विमा आणि जोखीम व्यवस्थापनाद्वारे आपली संपत्ती सांभाळा.",
    ],

    principlesQuote: "आर्थिक साक्षरता म्हणजे केवळ ज्ञान नव्हे, तर कृती करण्याचा कौशल्य आहे जे भविष्य सुरक्षित करते.",

    savingStrategies: [
      "बजेट तयार करा आणि त्याचे पालन करा.",
      "आपत्कालीन निधी तयार करा.",
      "आपल्या उत्पन्नाच्या मर्यादेत खर्च करा.",
      "अवश्यकतेपेक्षा जास्त खर्च टाळा.",
      "स्वयंचलित बचत सुरू करा.",
      "नोकरीतील लाभ मिळवा.",
      "शिकाऊ आणि सवलतींचा वापर करा.",
    ],

    investmentVehicles: [
      "म्युचुअल फंड: व्यवस्थापित गुंतवणूक.",
      "इंडेक्स फंड व ईटीएफ: कमी खर्चात गुंतवणूक.",
      "शेअर्स: कंपन्यांमध्ये मालकी.",
      "बॉण्ड: निश्चित व्याजाची कर्जपत्रे.",
      "पीपीएफ आणि सरकारी योजना: सुरक्षित बचत.",
      "फिक्स्ड/रिकरिंग डिपॉजिट: ठराविक व्याज रक्कम.",
    ],

    investmentStrategies: [
      {
        strategy: "खरेदी व धरणे",
        description: "दीर्घकालीन वृद्धीसाठी गुंतवणूक ठेवा.",
        suitableFor: "सोप्या गुंतवणूकदारांसाठी.",
      },
      {
        strategy: "इंडेक्स फंड",
        description: "कम खर्चातील निधीवर गुंतवणूक करा.",
        suitableFor: "विविधीकरण हवे असलेल्या गुंतवणूकदारांसाठी.",
      },
      {
        strategy: "इंडेक्स आणि काही निवडक शेअर्स",
        description: "इंडेक्ससह शेअर्समध्ये थोडी गुंतवणूक करा.",
        suitableFor: "विशिष्ट संशोधन करणाऱ्यांसाठी.",
      },
      {
        strategy: "उत्पन्न वाढीवर लक्ष",
        description: "डिव्हिडेंड / व्याजावर लक्ष ठेवून गुंतवा.",
        suitableFor: "नियमित उत्पन्न हवे असलेल्या लोकांसाठी.",
      },
      {
        strategy: "डॉलर-कॉस्ट एवरेजिंग",
        description: "नियमित निधी गुंतवून जोखीम कमी करा.",
        suitableFor: "सतत गुंतवणूक करणाऱ्यांसाठी.",
      },
    ],

    investmentTips: [
      "लवकर गुंतवणूक सुरू करा.",
      "विविधीकरण करा.",
      "खर्च आणि फी कमी ठेवा.",
      "नियमित गुंतवणूक करा.",
      "तुमच्या उद्दिष्टानुसार गुंतवा.",
    ],

    managingDebt: [
      "चांगल्या व वाईट कर्जात फरक करा.",
      "ब्याज व अटी नीट समजून घ्या.",
      "जास्त फी असलेले कर्ज आधी फेडा.",
      "क्रेडिट स्कोर कायम ठेवा.",
      "कर्ज फेडीची योजना करा.",
    ],

    planningGoals: [
      "लघु, मध्यम व दीर्घकालीन लक्ष्य ठरवा.",
      "बजेट तयार करा व त्यानुसार खर्च करा.",
      "जीवनशैलीनुसार विचार बदला.",
      "लवकर निवृत्तीची योजना करा.",
    ],
  },

  bn: {
    screenTitle: "আর্থিক শিক্ষা: সম্পূর্ণ গাইড",

    sections: {
      termsTitle: "মূল অর্থনৈতিক শব্দাবলী",
      principlesTitle: "আর্থিক শিক্ষার পাঁচটি মূলনীতি",
      savingStrategiesTitle: "মৌলিক সঞ্চয় কৌশল",
      investmentMethodsTitle: "বিনিয়োগের পদ্ধতি ও ধারণা",
      managingDebtTitle: "ঋণ ও ক্রেডিট ব্যবস্থাপনা",
      planningGoalsTitle: "আর্থিক পরিকল্পনা ও লক্ষ্য নির্ধারণ",
    },

    terms: [
      { term: "বাজেট", definition: "একটি পরিকল্পনা যা নির্দিষ্ট সময়কালে আয় ও ব্যয়ের ধারণা দেয়, অর্থ কার্যকরভাবে পরিচালনা করতে সাহায্য করে।" },
      { term: "আয়", definition: "কাজ, ব্যবসা, বিনিয়োগ বা অন্যান্য উৎস থেকে উপার্জিত টাকা।" },
      { term: "ব্যয়", definition: "পণ্য, পরিষেবা ও অন্যান্য খাতে খরচকৃত অর্থ।" },
      { term: "সঞ্চয়", definition: "আয়ের এমন অংশ যা খরচ হয়নি, প্রায়শই ভবিষ্যতের জন্য সংরক্ষিত থাকে।" },
      { term: "সুদের হার", definition: "ঋণ অথবা জমা/বিনিয়োগে প্রাপ্ত বা প্রদত্ত শতাংশ।" },
      { term: "চক্রবৃদ্ধি সুদ", definition: "মূলধন এবং পূর্ববর্তী সুদ উভয়ের উপরে সুদ পাওয়া।" },
      { term: "মুদ্রাস্ফীতি", definition: "দাম বৃদ্ধির হার, যার ফলে অর্থের ক্রয় ক্ষমতা কমে।" },
      { term: "বৈচিত্র্যকরণ", definition: "ঝুঁকি কমাতে বিভিন্ন প্রকার সম্পদে বিনিয়োগ।" },
      { term: "মিউচুয়াল ফান্ড", definition: "অনেক বিনিয়োগকারীর অর্থ নিয়ে পরিচালিত বৈচিত্র্যময় বিনিয়োগ।" },
      { term: "শেয়ার", definition: "কোনো কোম্পানির মালিকানার অংশ।" },
      { term: "বন্ড", definition: "নিশ্চিত সুদের সঙ্গে ঋণ বিনিয়োগ।" },
      { term: "ইটিএফ", definition: "বাজারে ট্রেড হওয়া এক ধরনের ফান্ড যা কোন সূচকের দিকনির্দেশ অনুসরণ করে।" },
      { term: "৪০১(কে)", definition: "যুক্তরাষ্ট্রে নিয়োগকর্তা দ্বারা চালিত অবসর সঞ্চয় পরিকল্পনা।" },
      { term: "সিস্টেম্যাটিক ইনভেস্টমেন্ট প্ল্যান", definition: "নিয়মিত নির্দিষ্ট অর্থের বিনিয়োগ পরিকল্পনা।" },
      { term: "ঋণ", definition: "উধার নেওয়া অর্থ যা সুদসহ ফেরত দিতে হয়।" },
      { term: "ক্রেডিট স্কোর", definition: "ঋণগ্রহণের যোগ্যতার একটি মান।" },
      { term: "তরলতা", definition: "সম্পদ সহজে নগদে রূপান্তর করার ক্ষমতা।" },
      { term: "ঝুঁকি সহনশীলতা", definition: "বিনিয়োগের ক্ষতি সহ্য করার সক্ষমতা।" },
      { term: "ইন্ডেক্স ফান্ড", definition: "এক ধরনের মাধ্যম যা কোনো সূচকের সুনির্দিষ্ট পারফরম্যান্স অনুকরণ করে।" },
      { term: "পিপিএফ", definition: "দীর্ঘমেয়াদী সরকারি সঞ্চয় প্রকল্প।" },
    ],

    principles: [
      "উপার্জন: আয় পরিচালনা করুন, কর্মস্থলের সুবিধা নিন এবং জীবনযাপন করুন আপনার সামর্থ্য অনুযায়ী।",
      "সঞ্চয় ও বিনিয়োগ: আয়ের কিছু অংশ সঞ্চয় করুন এবং ঝুঁকি ও সময় বিবেচনা করে বিনিয়োগ করুন।",
      "ঋণ নেওয়া ও ব্যবস্থাপনা: ঋণ এবং সুদের হার বুঝুন এবং চাপহীনভাবে ঋণপরিশোধের পরিকল্পনা করুন।",
      "ব্যয় ও পরিকল্পনা: সচেতন বাজেটিং ও খরচ ট্র্যাকিং করুন ও লক্ষ্য অনুসারে ব্যয় করুন।",
      "আপনার সম্পদের সুরক্ষা: বীমা এবং ঝুঁকি ব্যবস্থাপনা ব্যবহার করুন।",
    ],

    principlesQuote: "আর্থিক শিক্ষা শুধুই জ্ঞান নয় – এটি বাস্তবায়নযোগ্য দক্ষতা যা আপনার বর্তমান ও ভবিষ্যত সুরক্ষা দেয়।",

    savingStrategies: [
      "আয় ও ব্যয়ের হিসেব রাখার জন্য বাজেট তৈরি করুন।",
      "অপ্রত্যাশিত পরিস্থিতির জন্য ৩-৬ মাসের ব্যয়ের সমপরিমাণ জরুরি তহবিল গড়ে তুলুন।",
      "আপনার সামর্থ্যের মধ্যে জীবনযাপন করুন।",
      "অপ্রয়োজনীয় ব্যয় যেমন অব্যবহৃত সাবস্ক্রিপশন বাদ দিন।",
      "স্বয়ংক্রিয় সঞ্চয় ব্যবস্থা চালু করুন।",
      "কর্মস্থলের সুবিধা গ্রহণ করুন।",
      "সুযোগ-সুবিধা এবং ডিসকাউন্ট গ্রহণ করুন।",
    ],

    investmentVehicles: [
      "মিউচুয়াল ফান্ড: পেশাদারভাবে পরিচালিত, বৈচিত্র্যময় বিনিয়োগ।",
      "ইন্ডেক্স ফান্ড ও ইটিএফ: সাধারণত বাজেট কম ও ঝুঁকি কম করার জন্য।",
      "শেয়ার: কোম্পানির মালিকানার অংশ।",
      "বন্ড: স্থায়ী সুদের ঋণ।",
      "পিপিএফ ও সরকারি প্রকল্প: নিরাপদ, ট্যাক্স বেনিফিট সহ দীর্ঘমেয়াদী সঞ্চয়।",
      "ফিক্সড/রিকারিং ডিপোজিট: ন্যূনতম ঝুঁকি ও নিশ্চিত আয়।",
    ],

    investmentStrategies: [
      {
        strategy: "কিনুন ও ধরে রাখুন",
        description: "দীর্ঘমেয়াদে সম্পদ ধরে রাখুন এবং বৃদ্ধির সুফল নিন।",
        suitableFor: "সহজ ও দীর্ঘমেয়াদী বিনিয়োগ পছন্দকারীদের জন্য।",
      },
      {
        strategy: "ইন্ডেক্স ফান্ড কৌশল",
        description: "কম খরচে সূচক ফান্ডে বিনিয়োগ করুন যা বাজারের সাথে তাল মিলিয়ে চলে।",
        suitableFor: "বৈচিত্র্য ও কম ফি পছন্দকারীদের জন্য।",
      },
      {
        strategy: "‘ইন্ডেক্স এবং কিছু’",
        description: "অধিকাংশ অর্থ ইন্ডেক্স ফান্ডে এবং কিছু নির্দিষ্ট শেয়ারে বিনিয়োগ।",
        suitableFor: "নিজে স্টক সবিস্তার পড়াশোনা করতে ইচ্ছুকদের জন্য।",
      },
      {
        strategy: "আয় ভিত্তিক বিনিয়োগ",
        description: "নিয়মিত আয় লাভের জন্য ডিভিডেন্ড ও সুদভিত্তিক বিনিয়োগ।",
        suitableFor: "নিয়মিত নগদ প্রবাহ প্রয়োজন এমনদের জন্য।",
      },
      {
        strategy: "ডলার-কস্ট অ্যাভারেজিং",
        description: "নিয়মিত নির্দিষ্ট অর্থ বিনিয়োগ করে ঝুঁকি কমান।",
        suitableFor: "নিয়মিত বিনিয়োগকারীদের জন্য।",
      },
    ],

    investmentTips: [
      "শুরু করুন যত দ্রুত সম্ভব যেন চক্রবৃদ্ধির সুবিধা নিন।",
      "বিভিন্নিত বিনিয়োগ করুন।",
      "বিনিয়োগ খরচ ও ফি কম রাখুন।",
      "নিয়মিত বিনিয়োগ করুন।",
      "লক্ষ্য ও সময়সীমা অনুযায়ী বিনিয়োগ নির্বাচন করুন।",
    ],

    managingDebt: [
      "ভালো ও খারাপ ঋণ আলাদা করুন।",
      "সুদের হার, ফি, এবং ঋণ পরিশোধের শর্তাবলী বুঝুন।",
      "উচ্চ সুদের ঋণ আগে পরিশোধ করুন।",
      "ক্রেডিট স্কোর বজায় রাখুন।",
      "ঋণ পরিশোধের পরিকল্পনা তৈরি করুন।",
    ],

    planningGoals: [
      "স্বল্পমেয়াদী, মধ্যমেয়াদী এবং দীর্ঘমেয়াদী লক্ষ্য নির্ধারণ করুন।",
      "বাজেট তৈরি করে লক্ষ্য অনুযায়ী অর্থ বরাদ্দ করুন।",
      "পরিবর্তিত পরিস্থিতির সঙ্গে পরিকল্পনা সংশোধন করুন।",
      "অল্প বয়সে অবসর পরিকল্পনা শুরু করুন।",
    ],
  },
};

  
i18n.enableFallback = true;
i18n.locale = "en"; 

export default i18n;
