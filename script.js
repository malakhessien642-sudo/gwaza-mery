
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const gameContainer = document.getElementById("gameContainer");
    const playTitle = document.getElementById("playTitle");
    const playDescription = document.getElementById("playDescription");

    let currentGame = null;
    let questionIndex = 0;
    let score = 0;
    let answered = false;

    const games = {
        destiny: {
            title: "اختار مصيرك 💣",
            description: "كل اختيار هيحدد هتخرج من الموقف إزاي!",
            questions: [
                {
                    text: "حماتك المستقبلية بتتصل بيك فجأة. تعمل إيه؟",
                    answers: [
                        { text: "أرد بثقة: أيوه يا ماما ❤️", points: 2 },
                        { text: "أقفل وأقول الشبكة فصلت", points: 0 },
                        { text: "أدي الموبايل لصاحبي", points: 1 }
                    ]
                },
                {
                    text: "حماتك عزماك على الغدا. هتقول إيه؟",
                    answers: [
                        { text: "تسلم إيد حضرتك من دلوقتي", points: 2 },
                        { text: "هو في حد تاني جاي؟", points: 1 },
                        { text: "أنا عامل دايت", points: 0 }
                    ]
                },
                {
                    text: "لقيت 17 مكالمة فائتة. تتصرف إزاي؟",
                    answers: [
                        { text: "أتصل وأعتذر بأدب", points: 2 },
                        { text: "أبعت رسالة وأشرح اللي حصل", points: 1 },
                        { text: "أغير اسمي وأهاجر", points: 0 }
                    ]
                },
                {
                    text: "حماتك بتسألك: إنت بتسأل عني ليه قليل؟",
                    answers: [
                        { text: "حقك عليا يا ماما، هتواصل أكتر", points: 2 },
                        { text: "كنت مشغول شوية", points: 1 },
                        { text: "أعمل نفسي مش سامع", points: 0 }
                    ]
                },
                {
                    text: "وصلت البيت ولقيت العيلة كلها مستنياك!",
                    answers: [
                        { text: "أسلم عليهم وأشاركهم القعدة", points: 2 },
                        { text: "أقعد شوية وبعدها أستأذن", points: 1 },
                        { text: "أقول نسيت حاجة في العربية وأهرب", points: 0 }
                    ]
                }
            ],
            results: [
                {
                    min: 0,
                    max: 3,
                    emoji: "🏃",
                    title: "ملك الهروب الرسمي",
                    text: "أنت محتاج تدريب قبل ما تدخل أي اجتماع عائلي 😂"
                },
                {
                    min: 4,
                    max: 7,
                    emoji: "😅",
                    title: "ناجي بأعجوبة",
                    text: "بتعرف تنجو من بعض المواقف، بس لسه محتاج خبرة!"
                },
                {
                    min: 8,
                    max: 10,
                    emoji: "👑",
                    title: "دبلوماسي العيلة",
                    text: "بتعرف تتصرف بهدوء وذكاء. العيلة في أمان معاك!"
                }
            ]
        },

        court: {
            title: "محكمة الجوازات ⚖️",
            description: "جاوب على القضية عشان المحكمة تطلع الحكم!",
            questions: [
                {
                    text: "المتهم قال نازل يجيب حاجة ورجع بعد 5 ساعات. رأيك؟",
                    answers: [
                        { text: "كان بيجيبها من كوكب تاني 😂", points: 2 },
                        { text: "يمكن قابل أصحابه واتأخر", points: 1 },
                        { text: "براءة من غير تحقيق", points: 0 }
                    ]
                },
                {
                    text: "المتهمة قالت: أنا مش زعلانة، براحتك. تعمل إيه؟",
                    answers: [
                        { text: "أسألها بهدوء إيه اللي مضايقها", points: 2 },
                        { text: "أحاول أصالحها وأفهم منها", points: 1 },
                        { text: "أقول تمام وأكمل عادي", points: 0 }
                    ]
                },
                {
                    text: "المتهم نسي مناسبة مهمة. إيه الحل؟",
                    answers: [
                        { text: "اعتذار صادق وتعويض الموقف", points: 2 },
                        { text: "نحتفل بيها في يوم تاني", points: 1 },
                        { text: "أقول المناسبات دي اختراع", points: 0 }
                    ]
                },
                {
                    text: "المتهم قال: كنت ناوي أعمل مفاجأة!",
                    answers: [
                        { text: "فين المفاجأة يا فندم؟ هات الدليل!", points: 2 },
                        { text: "نسمعه الأول وبعدها نحكم", points: 1 },
                        { text: "نصدقه فورًا من غير دليل", points: 0 }
                    ]
                }
            ],
            results: [
                {
                    min: 0,
                    max: 2,
                    emoji: "🚨",
                    title: "المحكمة مش مطمنة",
                    text: "المتهم محتاج يجيب أدلة بدل الأعذار!"
                },
                {
                    min: 3,
                    max: 5,
                    emoji: "⚖️",
                    title: "حكم مع إيقاف التنفيذ",
                    text: "فرصة جديدة للمتهم بشرط عدم تكرار المخالفات."
                },
                {
                    min: 6,
                    max: 8,
                    emoji: "👨‍⚖️",
                    title: "مستشار العلاقات العائلية",
                    text: "حكمك متوازن! المحكمة رفعت الجلسة."
                }
            ]
        },

        trivia: {
            title: "تحدي الفهلوة 🧠",
            description: "اختبر معلوماتك في الأمثال والمواقف المصرية!",
            questions: [
                {
                    text: "المثل «الباب يفوت جمل» معناه إيه؟",
                    answers: [
                        { text: "الجمل بيعرف يفتح الأبواب", points: 0 },
                        { text: "نتساهل ونعدي الموقف", points: 1 },
                        { text: "نجيب جمل للبيت", points: 0 }
                    ]
                },
                {
                    text: "صاحبك قال إنه في الطريق وهو لسه في البيت. نسمي ده إيه؟",
                    answers: [
                        { text: "إدارة وقت متقدمة", points: 0 },
                        { text: "تأخير مصري أصيل 😂", points: 1 },
                        { text: "سرعة الضوء", points: 0 }
                    ]
                },
                {
                    text: "معنى «كل تأخيرة وفيها خيرة» إيه؟",
                    answers: [
                        { text: "كل تأخير ممكن يكون وراه خير", points: 1 },
                        { text: "التأخير مطلوب في كل حاجة", points: 0 },
                        { text: "نأجل كل المواعيد", points: 0 }
                    ]
                },
                {
                    text: "لما حد يقولك «اللي اختشوا ماتوا»، المقصود إيه؟",
                    answers: [
                        { text: "الحياء اختفى عند بعض الناس", points: 1 },
                        { text: "الناس راحت المستشفى", points: 0 },
                        { text: "الامتحانات خلصت", points: 0 }
                    ]
                },
                {
                    text: "دخلت المطبخ جعان وخرجت بتغسل المواعين. إيه اللي حصل؟",
                    answers: [
                        { text: "مهمة جانبية ظهرت فجأة 😂", points: 1 },
                        { text: "كسبت جائزة الطبخ", points: 0 },
                        { text: "دي خطة الهروب", points: 0 }
                    ]
                }
            ],
            results: [
                {
                    min: 0,
                    max: 1,
                    emoji: "🤔",
                    title: "محتاج تسخين",
                    text: "راجع الأمثال المصرية وارجع جرّب تاني!"
                },
                {
                    min: 2,
                    max: 3,
                    emoji: "😎",
                    title: "فهلوة على القد",
                    text: "فاهم الدنيا، بس لسه فيه شوية أمثال مستنياك."
                },
                {
                    min: 4,
                    max: 5,
                    emoji: "🏆",
                    title: "أسطورة القعدة المصرية",
                    text: "أنت جاهز لأي قعدة عائلية وأي نقاش على القهوة!"
                }
            ]
        },

        brideQuiz: {
            title: "إنتِ عروسة عاملة إزاي؟ 👰",
            description: "جاوبي بصراحة عشان نكشف شخصيتك الكوميدية!",
            questions: [
                {
                    text: "لو اتأخر عليكي في الميعاد، هتعملي إيه؟",
                    answers: [
                        { text: "أكلمه وأطمن عليه", points: 0 },
                        { text: "أبعتله: الساعة كام عندك؟ 😂", points: 2 },
                        { text: "أعمل جدول بالمخالفات", points: 3 }
                    ]
                },
                {
                    text: "لو نسي مناسبة مهمة، رد فعلك إيه؟",
                    answers: [
                        { text: "أفكره وأتكلم معاه بهدوء", points: 0 },
                        { text: "أعاتبه عتاب خفيف", points: 2 },
                        { text: "أفتح ملف المخالفات القديم", points: 3 }
                    ]
                },
                {
                    text: "لو قالك اختاري مكان الخروجة؟",
                    answers: [
                        { text: "أختار مكان ونتفق سوا", points: 0 },
                        { text: "أقوله عندي اقتراحات كتير", points: 2 },
                        { text: "أبعتله قائمة فيها 20 مكان", points: 3 }
                    ]
                },
                {
                    text: "لو قالك خمس دقايق وجاي؟",
                    answers: [
                        { text: "تمام، هستناك", points: 0 },
                        { text: "أشغل نفسي بحاجة", points: 2 },
                        { text: "أبدأ تحقيق الخمس دقايق", points: 3 }
                    ]
                }
            ],
            results: [
                {
                    min: 0,
                    max: 3,
                    emoji: "🌷",
                    title: "العروسة الهادية",
                    text: "بتحبي الهدوء والتفاهم، وبتفضلي الكلام الواضح."
                },
                {
                    min: 4,
                    max: 7,
                    emoji: "✨",
                    title: "العروسة صاحبة التفاصيل",
                    text: "بتاخدي بالك من التفاصيل، وعندك حس فكاهي حاضر."
                },
                {
                    min: 8,
                    max: 12,
                    emoji: "👑",
                    title: "رئيسة لجنة التنظيم",
                    text: "كل حاجة عندك ليها خطة وموعد وجدول متابعة 😂"
                }
            ]
        },

        groomQuiz: {
            title: "إنت عريس من أنهي نوع؟ 🤵",
            description: "جاوب على المواقف واعرف أسلوبك!",
            questions: [
                {
                    text: "لو شريكتك سألتك مالك؟ هتقول إيه؟",
                    answers: [
                        { text: "أحكيلها اللي مضايقني", points: 0 },
                        { text: "أقولها محتاج شوية وقت وأتكلم بعدها", points: 1 },
                        { text: "أقول مفيش حاجة وأنا واضح إني متضايق", points: 3 }
                    ]
                },
                {
                    text: "لو نسيت تجيب حاجة طلبتها منك؟",
                    answers: [
                        { text: "أعتذر وأحاول أصلح الموضوع", points: 0 },
                        { text: "أقولها نسيت وأعوضها", points: 1 },
                        { text: "أقولها ماكنتيش فكرتيني!", points: 3 }
                    ]
                },
                {
                    text: "لو عندك خروجة مع أصحابك واتغيرت الخطة؟",
                    answers: [
                        { text: "أتفق معاها على خطة مناسبة", points: 0 },
                        { text: "أشرح الموقف ونشوف حل", points: 1 },
                        { text: "أختفي وأرد بعدين", points: 3 }
                    ]
                },
                {
                    text: "لما يحصل خلاف، بتتصرف إزاي؟",
                    answers: [
                        { text: "أسمع وأتكلم بهدوء", points: 0 },
                        { text: "أحتاج وقت أهدى وبعدها نتكلم", points: 1 },
                        { text: "أعتبر إن السكوت هو الحل دايمًا", points: 3 }
                    ]
                }
            ],
            results: [
                {
                    min: 0,
                    max: 3,
                    emoji: "💚",
                    title: "العريس المتفاهم",
                    text: "بتحب الوضوح والتفاهم، ودي بداية كويسة لأي علاقة."
                },
                {
                    min: 4,
                    max: 7,
                    emoji: "😎",
                    title: "عريس على حسب الظروف",
                    text: "بتحاول تتصرف، وممكن تستفيد من شوية تواصل أوضح."
                },
                {
                    min: 8,
                    max: 12,
                    emoji: "📵",
                    title: "العريس وضع الطيران",
                    text: "الاختبار بيقول إنك محتاج تدي الحوار فرصة قبل ما تختفي 😂"
                }
            ]
        },

        naggingQuiz: {
            title: "مؤشر النكد الرسمي 🔥",
            description: "اختبار هزار لردود أفعالك في المواقف اليومية!",
            questions: [
                {
                    text: "حد رد عليك بكلمة «تمام». أول فكرة تيجي في بالك؟",
                    answers: [
                        { text: "تمام فعلًا ونكمل عادي", points: 0 },
                        { text: "أسأل لو فيه حاجة مضايقاه", points: 1 },
                        { text: "أحلل الكلمة وعلامة الترقيم", points: 3 }
                    ]
                },
                {
                    text: "حد اتأخر في الرد شوية. تعمل إيه؟",
                    answers: [
                        { text: "أكمل يومي عادي", points: 0 },
                        { text: "أبعت رسالة أطمن", points: 1 },
                        { text: "أراجع المحادثة كلها", points: 3 }
                    ]
                },
                {
                    text: "اتغيرت خطة الخروجة في آخر لحظة. رد فعلك؟",
                    answers: [
                        { text: "نشوف بديل مناسب", points: 0 },
                        { text: "أتضايق شوية وأتكلم", points: 1 },
                        { text: "أفتح اجتماع طارئ", points: 3 }
                    ]
                },
                {
                    text: "حد قالك: براحتك. هتعمل إيه؟",
                    answers: [
                        { text: "أسأله يقصد إيه لو مش واضح", points: 0 },
                        { text: "أوضح وجهة نظري بهدوء", points: 1 },
                        { text: "أكتب تقرير تحليلي عن الجملة", points: 3 }
                    ]
                }
            ],
            results: [
                {
                    min: 0,
                    max: 3,
                    emoji: "🌼",
                    title: "رايق على الآخر",
                    text: "بتحب الوضوح ومش بتقف عند كل تفصيلة."
                },
                {
                    min: 4,
                    max: 7,
                    emoji: "🌶️",
                    title: "توابل خفيفة",
                    text: "بتاخد بالك من التفاصيل، بس بتقدر تعدي المواقف."
                },
                {
                    min: 8,
                    max: 12,
                    emoji: "🔍",
                    title: "محقق التفاصيل",
                    text: "ولا كلمة بتعدي من غير تحليل! الاختبار بيهزر معاك 😂"
                }
            ]
        }
    };

    // القائمة الخاصة بالموبايل
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const opened = navLinks.classList.toggle("open");
            menuToggle.textContent = opened ? "✕" : "☰";
            menuToggle.setAttribute("aria-expanded", String(opened));
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // تشغيل أي لعبة من أزرار الموقع
    document.querySelectorAll("[data-game]").forEach(function (button) {
        button.addEventListener("click", function () {
            startGame(button.dataset.game);
        });
    });

    function startGame(gameId) {
        if (!games[gameId]) {
            gameContainer.innerHTML =
                '<div class="empty-state"><h3>اللعبة مش موجودة</h3><p>اختاري لعبة تانية.</p></div>';
            return;
        }

        currentGame = games[gameId];
        questionIndex = 0;
        score = 0;
        answered = false;

        playTitle.textContent = currentGame.title;
        playDescription.textContent = currentGame.description;

        gameContainer.innerHTML = "";
        renderQuestion();

        document.getElementById("playArea").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function renderQuestion() {
        if (!currentGame || questionIndex >= currentGame.questions.length) {
            finishGame();
            return;
        }

        answered = false;

        const question = currentGame.questions[questionIndex];
        const total = currentGame.questions.length;
        const progress = ((questionIndex + 1) / total) * 100;

        gameContainer.innerHTML = `
            <div class="question-meta">
                <span>السؤال ${questionIndex + 1} من ${total}</span>
                <span>⭐ نقاطك: ${score}</span>
            </div>

            <div class="progress-track">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>

            <h3 class="question-title">${question.text}</h3>

            <div class="answers-list" id="answersList"></div>

            <div id="feedback" class="feedback" hidden aria-live="polite"></div>

            <div class="quiz-actions">
                <span class="score-label">اختار إجابة واحدة 👇</span>
                <button id="nextButton" class="btn btn-primary" type="button" hidden>
                    ${questionIndex === total - 1 ? "اعرف النتيجة 🏆" : "السؤال التالي ←"}
                </button>
            </div>
        `;

        const answersList = document.getElementById("answersList");

        question.answers.forEach(function (answer, index) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "answer-btn";
            button.textContent = answer.text;

            button.addEventListener("click", function () {
                selectAnswer(index);
            });

            answersList.appendChild(button);
        });

        document.getElementById("nextButton").addEventListener("click", function () {
            questionIndex++;
            renderQuestion();
        });
    }

    function selectAnswer(answerIndex) {
        if (answered) return;

        answered = true;

        const question = currentGame.questions[questionIndex];
        const chosenAnswer = question.answers[answerIndex];

        score += chosenAnswer.points;

        const answerButtons = document.querySelectorAll(".answer-btn");

        answerButtons.forEach(function (button, index) {
            button.disabled = true;

            if (index === answerIndex) {
                button.classList.add("correct");
            }
        });

        const feedback = document.getElementById("feedback");
        feedback.hidden = false;

        const message = document.createElement("p");
        message.textContent = chosenAnswer.