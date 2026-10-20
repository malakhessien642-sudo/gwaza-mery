
/* ========================================
   JAWAZA MERY - JAVASCRIPT
   Interactive Features
======================================== */


/* 1. قائمة التنقل للموبايل */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // إغلاق القائمة بعد الضغط على أي رابط

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


/* 2. الاختبارات الكوميدية */

const quizButtons = document.querySelectorAll(".quiz-option");

quizButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // الوصول إلى كارت الاختبار الحالي

        const card = button.closest(".fun-card");

        if (!card) {
            return;
        }

        // الوصول إلى مكان ظهور النتيجة

        const result = card.querySelector(".quiz-result");

        if (!result) {
            return;
        }

        // إظهار النتيجة الموجودة داخل data-result

        result.textContent = button.dataset.result;

        result.classList.add("show");

        // تمييز الاختيار الذي ضغط عليه المستخدم

        const allButtons = card.querySelectorAll(".quiz-option");

        allButtons.forEach(function (item) {

            item.classList.remove("selected");

            item.setAttribute("aria-pressed", "false");

        });

        button.classList.add("selected");

        button.setAttribute("aria-pressed", "true");

    });

});


/* 3. ركن العرايس */

const brideButtons = document.querySelectorAll(".bride-choice");

const brideResult = document.getElementById("brideResult");

brideButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (!brideResult) {
            return;
        }

        brideResult.textContent = button.dataset.result;

        brideResult.classList.add("show");

        // تحديد الاختيار الحالي

        brideButtons.forEach(function (item) {

            item.classList.remove("selected");

        });

        button.classList.add("selected");

    });

});


/* 4. ركن العرسان */

const groomButtons = document.querySelectorAll(".groom-choice");

const groomResult = document.getElementById("groomResult");

groomButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (!groomResult) {
            return;
        }

        groomResult.textContent = button.dataset.result;

        groomResult.classList.add("show");

        // تحديد الاختيار الحالي

        groomButtons.forEach(function (item) {

            item.classList.remove("selected");

        });

        button.classList.add("selected");

    });

});


/* 5. محكمة الجواز */

const verdictButton = document.getElementById("verdictButton");

const verdictResult = document.getElementById("verdictResult");

const verdicts = [

    "حكمت المحكمة على الطرفين بالخروج لتناول البيتزا، والقاضي له قطعة زيادة! 🍕😂",

    "بعد الاطلاع على المحضر، تقرر تأجيل النقاش لحين وصول الشاي والبسكويت! ☕😂",

    "حكمت المحكمة بساعة هدوء لكل طرف، مع منع استخدام كلمة: براحتك! 😭",

    "قررت المحكمة إن اللي اختار الفيلم هو المسؤول عن الفشار! 🍿😂",

    "حكمت المحكمة بالصلح، بشرط إن الاعتذار يكون مصحوبًا بحاجة حلوة! 🍫❤️",

    "بعد المداولة، تقرر تقسيم آخر قطعة فراخ بالتساوي وتحت إشراف المحكمة! 🍗⚖️",

    "قررت المحكمة إن كل طرف يحكي وجهة نظره، والدوشة عليها غرامة! 😂",

    "حكمت المحكمة بإلغاء النكد مؤقتًا لحين انتهاء الحلقة الأخيرة! 📺😂",

    "قررت المحكمة إن غسل المواعين يتم بالتناوب، والاستئناف بعد العشا! 🍽️😂",

    "حكمت المحكمة إن الضحك حق أصيل للطرفين، وأي زعل محتاج جلسة تفاهم! ❤️"

];

if (verdictButton && verdictResult) {

    verdictButton.addEventListener("click", function () {

        // اختيار حكم عشوائي

        const randomIndex = Math.floor(
            Math.random() * verdicts.length
        );

        verdictResult.textContent = verdicts[randomIndex];

        verdictResult.classList.add("show");

        // تغيير نص الزر بعد ظهور الحكم

        verdictButton.textContent = "إصدار حكم جديد 😂";

    });

}


/* 6. نصايح ميري */

const adviceButton = document.getElementById("adviceButton");

const adviceText = document.getElementById("adviceText");

const adviceList = [

    "قبل ما ترد وإنت متعصب، خد نفس وافتكر إن النقاش مش مسابقة مين يكسب فيها. ❤️",

    "الاعتذار مش ضعف، ساعات كلمة آسف بتختصر نقاش طويل جدًا. ❤️",

    "الهزار حلو، بس خلي بالك إن مش كل الناس بتستقبل نفس الهزار بنفس الطريقة. 😂",

    "لو حصل سوء تفاهم، اسأل وافهم قبل ما تحكم على الموقف. 💬",

    "مش لازم تتفقوا على كل حاجة، المهم تعرفوا تختلفوا باحترام. 🤝",

    "المشاركة مش في الفرح بس، المشاركة كمان في المسؤوليات اليومية. 🏠",

    "الكلمة الحلوة ببلاش، بس ممكن تفرق في يوم حد بشكل كبير. 💌",

    "الضحك بيهوّن مواقف كتير، بشرط إن محدش يكون هو النكتة غصب عنه. 😂",

    "اسمع كويس قبل ما ترد؛ ساعات الناس محتاجة تتفهم أكتر ما محتاجة نصيحة. ❤️",

    "العلاقة الصحية فيها احترام وحدود واضحة، مش تحكم ولا ضغط. 🌷"

];

let previousAdviceIndex = -1;

if (adviceButton && adviceText) {

    adviceButton.addEventListener("click", function () {

        let randomIndex;

        // منع تكرار النصيحة السابقة مباشرة

        do {

            randomIndex = Math.floor(
                Math.random() * adviceList.length
            );

        } while (
            randomIndex === previousAdviceIndex &&
            adviceList.length > 1
        );

        previousAdviceIndex = randomIndex;

        adviceText.textContent = adviceList[randomIndex];

        // حركة بسيطة عند تغيير النصيحة

        adviceText.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(10px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 350,
                easing: "ease-out"
            }
        );

    });

}


/* 7. تأثير الضغط على الأزرار */

const allActionButtons = document.querySelectorAll(
    ".quiz-option, .bride-choice, .groom-choice, .btn"
);

allActionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // تأثير بسيط بدون تعطيل وظيفة الزر

        button.classList.add("clicked");

        setTimeout(function () {

            button.classList.remove("clicked");

        }, 250);

    });

});


/* 8. رسالة في Console للتأكد من تحميل الملف */

console.log(
    "❤️ جوازة ميري اشتغلت بنجاح! أهلاً بيك في مكتب النجدة الزوجية 😂"
);
