
/* ==========================================
   JAWAZET MERY - INTERACTIVE GAME ENGINE
========================================== */

"use strict";

// ==========================================
// 1. عناصر الصفحة
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const gameContainer = document.getElementById("gameContainer");
const playTitle = document.getElementById("playTitle");
const playDescription = document.getElementById("playDescription");

const resultArea = document.getElementById("resultArea");
const resultContainer = document.getElementById("resultContainer");

let currentGame = null;
let currentQuestion = 0;
let score = 0;
let answersHistory = [];
let gameFinished = false;
let currentQuestions = [];
let currentGameData = null;


// ==========================================
// 2. القائمة للموبايل
// ==========================================

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// ==========================================
// 3. قاعدة بيانات الألعاب
// ==========================================

const games = {

    // --------------------------------------
    // اللعبة الأولى: اختار مصيرك
    // --------------------------------------

    destiny: {
        title: "اختار مصيرك 💣",
        description: "اختار تصرفك وشوف هتوصل لفين!",
        type: "story",
        questions: [
            {
                text: "أنت خارج مع أصحابك، وفجأة موبايلك رن... الاسم: حماتك المستقبلية! 😨",
                answers: [
                    {
                        text: "أرد بكل ثقة: أيوه يا ماما ❤️",
                        next: 1,
                        points: 2,
                        feedback: "يا سلام على الثقة! واضح إنك متدرب."
                    },
                    {
                        text: "أقفل الموبايل وأعمل نفسي في نفق",
                        next: 2,
                        points: 0,
                        feedback: "بدأنا الهروب الرسمي 😂"
                    },
                    {
                        text: "أدي الموبايل لصاحبي يرد مكاني",
                        next: 3,
                        points: 1,
                        feedback: "صاحبك دخل الاختبار من غير ما يعرف."
                    }
                ]
            },

            {
                text: "حماتك قالتلك: تعالى اتغدى عندنا، هنعملك أكلة حلوة. تعمل إيه؟",
                answers: [
                    {
                        text: "أقولها تسلم إيدك من دلوقتي",
                        next: 4,
                        points: 2
                    },
                    {
                        text: "أسأل: هو في حد تاني جاي؟",
                        next: 5,
                        points: 1
                    },
                    {
                        text: "أقولها أنا عامل دايت",
                        next: 6,
                        points: 0
                    }
                ]
            },

            {
                text: "رجعت البيت ولقيت 17 مكالمة فائتة. التصرف؟",
                answers: [
                    {
                        text: "أرن وأقول كنت في اجتماع مهم",
                        next: 7,
                        points: 2
                    },
                    {
                        text: "أبعت رسالة: الشبكة كانت فاصلة",
                        next: 8,
                        points: 1
                    },
                    {
                        text: "أغير اسمي وأهاجر",
                        next: 9,
                        points: 0
                    }
                ]
            },

            {
                text: "صاحبك رد وقال: ألو يا طنط، أنا معاه أهو... 😭",
                answers: [
                    {
                        text: "أخد الموبايل وأكمل الحوار",
                        next: 1,
                        points: 2
                    },
                    {
                        text: "أعمل نفسي مش سامع",
                        next: 2,
                        points: 0
                    },
                    {
                        text: "أقوله هات الموبايل يا خائن!",
                        next: 3,
                        points: 1
                    }
                ]
            },

            {
                text: "وصلت بيت حماتك والأكل على السفرة. تقول إيه؟",
                answers: [
                    {
                        text: "تسلم إيد حضرتك، ريحة الأكل تجنن",
                        next: 10,
                        points: 2
                    },
                    {
                        text: "هو الأكل ده فيه بصل؟",
                        next: 11,
                        points: 1
                    },
                    {
                        text: "أنا أكلت قبل ما أجي",
                        next: 12,
                        points: 0
                    }
                ]
            },

            {
                text: "حماتك سألتك: إنت بتسأل عني ليه قليل؟",
                answers: [
                    {
                        text: "التقصير مني يا ماما، حقك عليا",
                        next: 10,
                        points: 2
                    },
                    {
                        text: "كنت مستني حضرتك تسألي",
                        next: 11,
                        points: 1
                    },
                    {
                        text: "أعمل نفسي الموبايل فصل",
                        next: 12,
                        points: 0
                    }
                ]
            },

            {
                text: "حماتك قالت: طب خلاص، براحتك يا حبيبي!",
                answers: [
                    {
                        text: "أقولها لأ يا ماما، أنا جاي مخصوص",
                        next: 10,
                        points: 2
                    },
                    {
                        text: "أقول الحمد لله وأجري",
                        next: 11,
                        points: 1
                    },
                    {
                        text: "أقفل المكالمة فورًا",
                        next: 12,
                        points: 0
                    }
                ]
            },

            {
                text: "اكتشفت إن الاجتماع كان اجتماع عائلي، وكلهم بيسألوا عليك!",
                answers: [
                    {
                        text: "أدخل المكالمة وأشارك عادي",
                        next: 10,
                        points: 2
                    },
                    {
                        text: "أقول صوتكم مش واضح",
                        next: 11,
                        points: 1
                    },
                    {
                        text: "أعمل وضع الطيران",
                        next: 12,
                        points: 0
                    }
                ]
            },

            {
                text: "صاحبك بيقولك: الشبكة عندي زي الفل! 😭",
                answers: [
                    {
                        text: "أضحك وأعترف إني كنت بتهرب",
                        next: 10,
                        points: 2
                    },
                    {
                        text: "أقوله طب ماشي يا عم",
                        next: 11,
                        points: 1
                    },
                    {
                        text: "أعمل بلوك لصاحبي",
                        next: 12,
                        points: 0
                    }
                ]
            },

            {
                text: "أنت وصلت لمرحلة إنك لازم تواجه الموقف!",
                answers: [
                    {
                        text: "أواجهه وأعتذر بأدب",
                        next: 10,
                        points: 2
                    },
                    {
                        text: "أغير الموضوع",
                        next: 11,
                        points: 1
                    },
                    {
                        text: "أختفي من على الكوكب",
                        next: 12,
                        points: 0
                    }
                ]
            },

            {
                text: "حماتك ابتسمت وقالت: نورت يا حبيبي! كده أنت في الأمان.",
                answers: [
                    {
                        text: "أشكرها وأقعد معاهم",
                        next: "end",
                        points: 2
                    },
                    {
                        text: "أطلب الشاي وأغير الموضوع",
                        next: "end",
                        points: 1
                    },
                    {
                        text: "أقولها أنا لازم أمشي",
                        next: "end",
                        points: 0
                    }
                ]
            },

            {
                text: "حماتك سألتك عن خططك للمستقبل. تجاوب إزاي؟",
                answers: [
                    {
                        text: "أجاوب بوضوح واحترام",
                        next: "end",
                        points: 2
                    },
                    {
                        text: "أقولها لسه بنشوف",
                        next: "end",
                        points: 1
                    },
                    {
                        text: "أقولها أنا جاي أزور مش أقدم على وظيفة",
                        next: "end",
                        points: 0
                    }
                ]
            },

            {
                text: "الموقف انتهى، بس العيلة كلها عايزة تعرف الحكاية!",
                answers: [
                    {
                        text: "أحكي اللي حصل وأضحك معاهم",
                        next: "end",
                        points: 2
                    },
                    {
                        text: "أقول حصل خير ونقفل الموضوع",
                        next: "end",
                        points: 1
                    },
                    {
                        text: "أعلن انسحابي من العيلة",
                        next: "end",
                        points: 0
                    }
                ]
            }
        ],

        results: [
            {
                max: 5,
                emoji: "🏃",
                title: "ملك الهروب الرسمي",
                text: "أنت لو شوفت كلمة حماتي على الشاشة هتدخل وضع الطيران تلقائيًا 😂"
            },
            {
                max: 11,
                emoji: "😅",
                title: "ناجي بأعجوبة",
                text: "بتحاول تعدي المواقف بأقل خسائر، بس محتاج تتدرب على الثبات الانفعالي!"
            },
            {
                max: 99,
                emoji: "👑",
                title: "دبلوماسي العيلة",
                text: "بتعرف تتصرف وتهدي المواقف. ناقصك بدلة رسمية ومنصب وزير العلاقات العائلية!"
            }
        ]
    },


    // --------------------------------------
    // اللعبة الثانية: محكمة الجوازات
    // --------------------------------------

    court: {
        title: "محكمة الجوازات ⚖️",
        description: "جاوب على أسئلة القضية عشان نطلع الحكم!",
        type: "quiz",
        questions: [
            {
                text: "المتهم قال إنه نازل يجيب حاجة ورجع بعد 5 ساعات. رأيك؟",
                answers: [
                    {
                        text: "أكيد كان بيجيب الحاجة من كوكب تاني",
                        points: 2,
                        feedback: "تفسير مقنع جدًا يا سيادة المستشار 😂"
                    },
                    {
                        text: "يمكن قابل أصحابه واتأخر",
                        points: 1,
                        feedback: "احتمال وارد في سجلات المحكمة."
                    },
                    {
                        text: "براءة فورًا من غير تحقيق",
                        points: 0,
                        feedback: "المحكمة تطلب استئناف الحكم!"
                    }
                ]
            },

            {
                text: "المتهمة قالت: أنا مش زعلانة، براحتك. القاضي يسأل: ده معناه إيه؟",
                answers: [
                    {
                        text: "نطلب توضيح رسمي من المتهمة",
                        points: 2
                    },
                    {
                        text: "نجيب شوكولاتة ونتفاهم",
                        points: 1
                    },
                    {
                        text: "نقول تمام ونكمل لعب",
                        points: 0
                    }
                ]
            },

            {
                text: "المتهم نسي مناسبة مهمة. إيه الإجراء المناسب؟",
                answers: [
                    {
                        text: "اعتذار صادق ومحاولة إصلاح الموقف",
                        points: 2
                    },
                    {
                        text: "نحتفل بالمناسبة بكرة",
                        points: 1
                    },
                    {
                        text: "نقول المناسبات دي اختراع",
                        points: 0
                    }
                ]
            },

            {
                text: "آخر سؤال: المتهم قال أنا كنت ناوي أعمل مفاجأة!",
                answers: [
                    {
                        text: "فين المفاجأة يا فندم؟ هات الدليل!",
                        points: 2
                    },
                    {
                        text: "نمنحه فرصة يشرح",
                        points: 1
                    },
                    {
                        text: "نصدقه من غير أي دليل",
                        points: 0
                    }
                ]
            }
        ],

        results: [
            {
                max: 2,
                emoji: "🚨",
                title: "المحكمة مش مطمنة",
                text: "المحكمة قررت إعادة التحقيق، والمتهم مطلوب منه يجيب دليل مش أعذار!"
            },
            {
                max: 5,
                emoji: "⚖️",
                title: "حكم مع إيقاف التنفيذ",
                text: "تم منح المتهم فرصة جديدة بشرط الالتزام وعدم تكرار المواقف الكوميدية."
            },
            {
                max: 99,
                emoji: "👨‍⚖️",
                title: "مستشار العلاقات العائلية",
                text: "حكمك متوازن وبتعرف تفرق بين الهزار والجد. المحكمة رفعت الجلسة!"
            }
        ]
    },


    // --------------------------------------
    // اللعبة الثالثة: تحدي الفهلوة
    // --------------------------------------

    trivia: {
        title: "تحدي الفهلوة 🧠",
        description: "جاوب صح واجمع نقاطك!",
        type: "quiz",
        questions: [
            {
                text: "لو حد قالك: الباب يفوت جمل... المقصود غالبًا إيه؟",
                answers: [
                    {
                        text: "إن الجمل بيعرف يفتح الأبواب",
                        points: 0,
                        feedback: "يا نهار أبيض 😂"
                    },
                    {
                        text: "إننا نوسع صدرنا ونتساهل في الموقف",
                        points: 1,
                        feedback: "إجابة صحيحة!"
                    },
                    {
                        text: "إننا نجيب جمل للبيت",
                        points: 0
                    }
                ]
            },

            {
                text: "لما صاحبك يقولك: أنا في الطريق، وهو لسه في البيت... نسمي ده إيه؟",
                answers: [
                    {
                        text: "إدارة وقت متقدمة",
                        points: 0
                    },
                    {
                        text: "تأخير مصري أصيل 😂",
                        points: 1,
                        feedback: "بالظبط!"
                    },
                    {
                        text: "سرعة الضوء",
                        points: 0
                    }
                ]
            },

            {
                text: "لو حد قالك: اللي اختشوا ماتوا، ده مثل بيشير لإيه؟",
                answers: [
                    {
                        text: "إن الحياء اختفى عند بعض الناس",
                        points: 1,
                        feedback: "مظبوط!"
                    },
                    {
                        text: "إن الناس لازم تروح المستشفى",
                        points: 0
                    },
                    {
                        text: "إن الاختبارات خلصت",
                        points: 0
                    }
                ]
            },

            {
                text: "صاحبك بيقولك: عندي خبر مهم، وبعدين يقولك الجو حر. تعمل إيه؟",
                answers: [
                    {
                        text: "أطلب منه يدخل في الموضوع",
                        points: 1
                    },
                    {
                        text: "أكتب الخبر في الجرايد",
                        points: 0
                    },
                    {
                        text: "أعمل مؤتمر صحفي",
                        points: 0
                    }
                ]
            },

            {
                text: "لما حد يقولك: كل تأخيرة وفيها خيرة، إيه المعنى؟",
                answers: [
                    {
                        text: "كل تأخير ممكن يكون وراه خير",
                        points: 1
                    },
                    {
                        text: "التأخير مطلوب في كل حاجة",
                        points: 0
                    },
                    {
                        text: "نأجل كل المواعيد",
                        points: 0
                    }
                ]
            },

            {
                text: "آخر سؤال: لو دخلت المطبخ جعان وخرجت بتغسل المواعين... إيه اللي حصل؟",
                answers: [
                    {
                        text: "مهمة جانبية ظهرت فجأة",
                        points: 1
                    },
                    {
                        text: "أنا كسبت جائزة الطبخ",
                        points: 0
                    },
                    {
                        text: "ده جزء من خطة الهروب",
                        points: 0
                    }
                ]
            }
        ],

        results: [
            {
                max: 2,
                emoji: "🤔",
                title: "محتاج تسخين",
                text: "الأسئلة المصرية لسه بتختبرك. العب تاني وهتجمع نقاط أكتر!"
            },
            {
                max: 4,
                emoji: "😎",
                title: "فهلوة على القد",
                text: "فاهم الدنيا، بس لسه في أمثال ومواقف مستنياك."
            },
            {
                max: 99,
                emoji: "🏆",
                title: "أسطورة القعدة المصرية",
                text: "أنت جاهز لأي قعدة عائلية وأي نقاش على القهوة. مبروك يا معلم!"
            }
        ]
    },


    // --------------------------------------
    // الاختبار الرابع: شخصية العروسة
    // --------------------------------------

    brideQuiz: {
        title: "إنتِ عروسة عاملة إزاي؟ 👰",
        description: "جاوبي بصراحة عشان نكشف شخصيتك الكوميدية.",
        type: "personality",
        questions: [
            {
                text: "لو اتأخر عليكي في الميعاد، هتعملي إيه؟",
                answers: [
                    { text: "أكلمه وأطمن عليه", points: 0 },
                    { text: "أبعتله: الساعة كام عندك؟ 😂", points: 2 },
                    { text: "أعمل جدول بالمخالفات", points: 3 }
                ]
            },

