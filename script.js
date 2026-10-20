
const articles = [
  {
    id: "b1", category: "brides", label: "كوميديا العرايس", emoji: "🛍️",
    title: "نزلت أجيب حاجة بسيطة",
    excerpt: "العروسة قبل الشوبينج: هشتري حاجة واحدة. بعد الشوبينج: محتاجة مخزن!",
    content: [
      "العروسة قبل ما تنزل: مش هتأخر، أنا عارفة أنا عايزة إيه.",
      "بعد ساعتين: محتاجة ألف على محل تاني عشان أتأكد إن مفيش حاجة أحلى!",
      "وبعد الرجوع: اكتشفت إنها نسيت الحاجة الوحيدة اللي نزلت تشتريها أصلًا. 😂",
      "الخلاصة: اعملي قائمة بالحاجات المهمة وحددي ميزانية قبل النزول، عشان التجهيزات تبقى أهدى."
    ]
  },
  {
    id: "b2", category: "brides", label: "كوميديا العرايس", emoji: "🏠",
    title: "معركة فرش الشقة",
    excerpt: "الكنبة لونها حلو، بس هل هتمشي مع الستارة والسجادة؟",
    content: [
      "اختيار كنبة ممكن يبدأ بقرار بسيط وينتهي بمقارنة 17 درجة من الرمادي.",
      "واحد شايف اللون جميل، والتاني شايفه مختلف تحت إضاءة المحل، وفجأة بقى الموضوع مشروع تخرج!",
      "نصيحة: اتفقوا على الميزانية والمقاسات والألوان الأساسية قبل الشراء. وخدوا صور للغرفة عشان المقارنة تبقى أسهل."
    ]
  },
  {
    id: "b3", category: "brides", label: "كوميديا العرايس", emoji: "📸",
    title: "الصورة رقم 100",
    excerpt: "كل الصور حلوة، بس لسه الصورة اللي في الخيال مجتش!",
    content: [
      "المصور: الصورة دي جميلة جدًا.",
      "العروسة: حلوة، بس نجرب واحدة كمان.",
      "بعد صور كتير: طب نرجع لأول صورة، كانت حلوة فعلًا! 😂",
      "افتكري إن اليوم نفسه أهم من مطاردة الصورة المثالية. استمتعي باللحظة."
    ]
  },
  {
    id: "b4", category: "brides", label: "كوميديا العرايس", emoji: "💄",
    title: "روتين الجمال قبل الفرح",
    excerpt: "كل يوم روتين جديد، والفرح قرب!",
    content: [
      "العروسة عاملة جدول للعناية بالبشرة والشعر والنوم والأكل.",
      "المشكلة إن الجدول نفسه بقى محتاج حد ينظمه!",
      "خلي روتينك بسيط ومريح، وابعدي عن تجربة منتجات جديدة بشكل مفاجئ قبل المناسبة. واهتمي براحتك أكتر من الكمال."
    ]
  },
  {
    id: "b5", category: "brides", label: "كوميديا العرايس", emoji: "👩‍👧",
    title: "العروسة ومامتها",
    excerpt: "كل واحدة عندها تصور مختلف للتجهيزات!",
    content: [
      "ماما: أنا عايزاكي تختاري اللي يريحك.",
      "العروسة: تمام، هختار ده.",
      "ماما: حلو، بس بصي على اللي جنبه الأول! 😂",
      "اختلاف الأذواق طبيعي. اسمعوا بعض، وخلي القرار النهائي واضح ومتفق عليه من غير ضغط."
    ]
  },
  {
    id: "b6", category: "brides", label: "كوميديا العرايس", emoji: "💌",
    title: "رسالة الخطيب الطويلة",
    excerpt: "بعتتله رسالة طويلة، ورد عليها بقلب أحمر!",
    content: [
      "العروسة كتبت رسالة فيها كل التفاصيل والمشاعر والأحداث من أول اليوم.",
      "الخطيب رد: ❤️",
      "هي: هو قراها أصلًا؟",
      "أحيانًا الطرف التاني بيكون مشغول أو مش بيعرف يعبر بالكلام. اسألي بهدوء عن اللي محتاجاه، واتفقوا على طريقة تواصل تريحكم أنتم الاتنين."
    ]
  },
  {
    id: "g1", category: "grooms", label: "كوميديا العرسان", emoji: "💸",
    title: "الميزانية راحت فين؟",
    excerpt: "العريس عامل ميزانية على الورق، والواقع عنده رأي تاني.",
    content: [
      "العريس كتب قائمة المصاريف بكل ثقة، ووصل في الآخر لرقم عظيم.",
      "وبعدين اكتشف إن القائمة ناقصها حاجات صغيرة كتير، كل واحدة لوحدها بسيطة، بس مجموعهم مش بسيط خالص! 😂",
      "الحل: حطوا كل المصاريف المتوقعة في قائمة، وسيبوا جزءًا للطوارئ، وراجعوا الأسعار قبل الالتزام."
    ]
  },
  {
    id: "g2", category: "grooms", label: "كوميديا العرسان", emoji: "👔",
    title: "مهمة اختيار البدلة",
    excerpt: "داخل يشتري بدلة، خارج حافظ أسماء ألوان جديدة.",
    content: [
      "العريس: عايز بدلة سودة وخلاص.",
      "البائع: عندنا أسود فحمي وأسود مطفي ودرجات تانية.",
      "العريس: هو أنا داخل أشتري بدلة ولا أدرس ألوان؟ 😂",
      "اختار بدلة مناسبة للمقاس والراحة والميزانية، وخد وقتك في المقارنة."
    ]
  },
  {
    id: "g3", category: "grooms", label: "كوميديا العرسان", emoji: "📱",
    title: "حاضر يا حبيبتي",
    excerpt: "أشهر رد في التاريخ، بس المهم يكون فاهم المطلوب!",
    content: [
      "هي: متنساش الحاجة اللي اتفقنا عليها.",
      "هو: حاضر يا حبيبتي.",
      "بعد شوية: هي الحاجة كانت إيه أصلًا؟ 😭",
      "بدل الاعتماد على الذاكرة، اكتبوا الحاجات المهمة في رسالة أو قائمة مشتركة. التنظيم مش ضد الرومانسية!"
    ]
  },
  {
    id: "g4", category: "grooms", label: "كوميديا العرسان", emoji: "🛋️",
    title: "العريس وفرش الشقة",
    excerpt: "كان فاكر الموضوع كنبة وسرير، طلع فيه تفاصيل كتير.",
    content: [
      "العريس داخل المعرض وعنده خطة واضحة.",
      "بعد الجولة اكتشف إن فيه مقاسات وخامات وضمان وتوصيل وتركيب.",
      "نصيحة: قيسوا المكان، وقارنوا الجودة والأسعار، ومتشترّوش تحت ضغط الاستعجال."
    ]
  },
  {
    id: "g5", category: "grooms", label: "كوميديا العرسان", emoji: "⏰",
    title: "خمس دقايق وأكون جاهز",
    excerpt: "خمس دقايق بتوقيت العريس ولا بتوقيت الساعة؟",
    content: [
      "هي جاهزة ومستنية.",
      "هو: خمس دقايق وننزل.",
      "بعد عشرين دقيقة: بدور على المفاتيح!",
      "الحل بسيط: جهزوا الحاجات من بدري، واتفقوا على ميعاد واقعي بدل الوعود السريعة."
    ]
  },
  {
    id: "g6", category: "grooms", label: "كوميديا العرسان", emoji: "⚽",
    title: "الماتش وميعاد الخروجة",
    excerpt: "لما الماتش والخروجة يقرروا ييجوا في نفس الوقت.",
    content: [
      "العريس بيحاول يوفق بين ميعاد مهم وماتش مستنيه من أسبوع.",
      "النتيجة؟ بيفتح التقويم كأنه مدير تنظيم بطولات!",
      "اتفقوا على المواعيد مسبقًا، واحترموا وقت بعض، وكل طرف يبقى له وقت لهواياته."
    ]
  },
  {
    id: "m1", category: "marriage", label: "مواقف الجواز", emoji: "🍕",
    title: "ناكل إيه النهارده؟",
    excerpt: "سؤال بسيط ممكن يتحول لاجتماع لمجلس إدارة البيت!",
    content: [
      "واحد: ناكل إيه؟",
      "التاني: أي حاجة.",
      "الأول: بيتزا؟",
      "التاني: لأ.",
      "الأول: طب اختاري إنتِ!",
      "التاني: مش عارفة! 😂",
      "جربوا كل واحد يقترح اختيارين، وبعدها اختاروا سوا. كده السؤال هياخد دقيقتين بدل ساعة."
    ]
  },
  {
    id: "m2", category: "marriage", label: "مواقف الجواز", emoji: "💬",
    title: "أنا كويسة.. مفيش حاجة",
    excerpt: "بدل التخمين، السؤال الهادي ممكن يفرق.",
    content: [
      "أحيانًا الواحد بيقول إنه كويس وهو في الحقيقة متضايق، لأنه مش جاهز للكلام.",
      "والطرف التاني يفضل يخمن الأسباب ويكتب سيناريوهات كتير في دماغه.",
      "الأفضل: اسأل باهتمام ومن غير ضغط، واتفقوا إنكم ترجعوا تتكلموا لما تكونوا مستعدين."
    ]
  },
  {
    id: "m3", category: "marriage", label: "مواقف الجواز", emoji: "🧹",
    title: "مين عليه الدور؟",
    excerpt: "شغل البيت مش مسابقة في قراءة الأفكار.",
    content: [
      "كل واحد مستني التاني يبدأ، والطبق واقف مستني قرار مصيري!",
      "بدل الانتظار والزعل، اتفقوا بوضوح على تقسيم المهام حسب الوقت والقدرة.",
      "المسؤولية المشتركة بتقلل الخلاف، وبتخلي البيت مكان مريح للطرفين."
    ]
  },
  {
    id: "m4", category: "marriage", label: "مواقف الجواز", emoji: "🎬",
    title: "اختيار الفيلم",
    excerpt: "اتفرجوا على الفيلم قبل ما الفيلم يخلص من كتر الاختيارات.",
    content: [
      "واحد عايز أكشن، والتاني عايز كوميدي، والاتنين عايزين يتبسطوا.",
      "بعد نص ساعة من التصفح، قرروا يناموا! 😂",
      "الحل: كل واحد يختار اقتراحًا واحدًا، واتفقوا على التناوب في الاختيار."
    ]
  },
  {
    id: "m5", category: "marriage", label: "مواقف الجواز", emoji: "🗓️",
    title: "الزيارة العائلية",
    excerpt: "لما كل عيلة عندها خطة لنفس اليوم!",
    content: [
      "الجمعة عند أهلي، والسبت عند أهلك، والأحد راحة... نظريًا!",
      "التقويم اتملأ قبل ما الأسبوع يبدأ.",
      "اتفقوا على الزيارات سوا، وراعوا ظروف كل طرف، وسيبوا وقتًا للراحة والخصوصية."
    ]
  },
  {
    id: "m6", category: "marriage", label: "مواقف الجواز", emoji: "🧳",
    title: "شنطة السفر",
    excerpt: "واحد جهز شنطة، والتاني جهز شنطتين احتياطي!",
    content: [
      "الرحلة يومين، لكن الشنطة كأنها رحلة حول العالم.",
      "كل قطعة ليها احتمال نحتاجها، حتى لو الاحتمال واحد في المليون!",
      "قائمة صغيرة حسب الطقس ومدة السفر هتساعدكم تحزموا اللي تحتاجوه فعلًا."
    ]
  },
  {
    id: "a1", category: "advice", label: "نصايح", emoji: "❤️",
    title: "أسئلة مهمة قبل الجواز",
    excerpt: "فيه موضوعات تستحق الكلام عنها قبل اتخاذ القرار.",
    content: [
      "اتكلموا عن القيم والأهداف، وطريقة حل الخلافات، والمسؤوليات اليومية.",
      "ناقشوا المصاريف والادخار والعمل والسكن والعلاقة مع العائلتين وتوقعات كل طرف.",
      "مش لازم تتفقوا على كل تفصيلة، لكن مهم تعرفوا الاختلافات وتعرفوا تتعاملوا معاها باحترام."
    ]
  },
  {
    id: "a2", category: "advice", label: "نصايح", emoji: "💰",
    title: "ميزانية من غير مفاجآت",
    excerpt: "الاتفاق المالي من بدري يقلل الخلافات.",
    content: [
      "اكتبوا المصاريف الأساسية، وقارنوا الدخل المتوقع بالالتزامات.",
      "اتفقوا على طريقة دفع المصاريف والادخار والطوارئ، وعلى إن القرارات المالية الكبيرة تتناقشوا فيها.",
      "مش مطلوب تبدأوا بكل حاجة مثالية؛ المهم خطة واقعية تناسب إمكانياتكم."
    ]
  },
  {
    id: "a3", category: "advice", label: "نصايح", emoji: "🗣️",
    title: "اتكلموا بدل التخمين",
    excerpt: "الطرف التاني مش مطلوب منه يعرف كل اللي في دماغك.",
    content: [
      "اختاروا وقتًا مناسبًا للكلام، واشرحوا مشاعركم واحتياجاتكم من غير إهانة أو اتهامات.",
      "اسمعوا بعض للنهاية، واسألوا للتوضيح بدل افتراض النوايا.",
      "لو النقاش سخن، خُدوا استراحة متفق عليها وارجعوا كملوه بهدوء."
    ]
  },
  {
    id: "a4", category: "advice", label: "نصايح", emoji: "🤝",
    title: "الاحترام وقت الخلاف",
    excerpt: "الاختلاف طبيعي، لكن الإهانة مش حل.",
    content: [
      "ممكن تختلفوا في الرأي من غير تجريح أو تهديد أو تقليل من الطرف الآخر.",
      "ركزوا على المشكلة نفسها، واتكلموا عن التصرف اللي ضايقكم بدل الهجوم على الشخصية.",
      "لو الخلافات متكررة أو مؤذية، الاستعانة بمختص موثوق ممكن تساعد."
    ]
  },
  {
    id: "a5", category: "advice", label: "نصايح", emoji: "🧾",
    title: "مش لازم تجيبوا كل حاجة مرة واحدة",
    excerpt: "البيت بيتبني على مراحل، مش على سباق مشتريات.",
    content: [
      "ابدؤوا بالأساسيات اللي تحتاجوها فعلًا، وبعدها زودوا الحاجات حسب الميزانية.",
      "قارنوا الأسعار والجودة، واسألوا عن الضمان والتوصيل قبل الشراء.",
      "متقارنوش بداية حياتكم بظروف غيركم؛ كل بيت له إمكانياته وأولوياته."
    ]
  },
  {
    id: "a6", category: "advice", label: "نصايح", emoji: "🌿",
    title: "المساحة الشخصية مهمة",
    excerpt: "الحب مش معناه إن كل واحد يلغي حياته الخاصة.",
    content: [
      "من الطبيعي يكون لكل طرف هوايات واهتمامات ووقت مع الأصدقاء أو العائلة.",
      "اتفقوا على حدود واضحة تحترم خصوصية الطرفين، مع مراعاة المسؤوليات المشتركة.",
      "التوازن بين الوقت المشترك والمساحة الشخصية يساعد على علاقة صحية."
    ]
  },
  {
    id: "j1", category: "jokes", label: "إفيهات وضحك", emoji: "😂",
    title: "العروسة والخطة البسيطة",
    excerpt: "خطة بسيطة جدًا... فيها 46 بندًا وملحقين!",
    content: [
      "العروسة: أنا مش عايزة حاجة كبيرة، أنا عايزة حاجة بسيطة.",
      "بعدها فتحت ملف التنظيم، فظهر شريط تمرير أطول من طريق السفر! 😂",
      "كل واحد وله تعريفه للبسيط؛ عشان كده الاتفاق الواضح على الأولويات مهم."
    ]
  },
  {
    id: "j2", category: "jokes", label: "إفيهات وضحك", emoji: "🤣",
    title: "العريس والميزانية",
    excerpt: "الميزانية كانت ماشية تمام لحد ما قابلت الأسعار.",
    content: [
      "العريس فاتح الجدول الإلكتروني ومبسوط من الحسابات.",
      "أول ما راجع الأسعار، فتح جدولًا جديدًا اسمه: نعيد التفكير! 😭",
      "الإفيه للضحك، لكن مقارنة الأسعار وتحديد سقف للمصروفات فعلًا بيفرقوا."
    ]
  },
  {
    id: "j3", category: "jokes", label: "إفيهات وضحك", emoji: "🍿",
    title: "اختيار الفيلم الأبدي",
    excerpt: "الفيلم خلص عند الناس، وهما لسه بيختاروا.",
    content: [
      "هو: اختاري أي فيلم.",
      "هي: اختار إنت.",
      "هو: طب ده؟",
      "هي: شوفناه.",
      "بعد بحث طويل: طب نعيد الفيلم اللي شوفناه قبل كده! 😂"
    ]
  },
  {
    id: "j4", category: "jokes", label: "إفيهات وضحك", emoji: "📦",
    title: "الكرتونة اللي محدش عارف فيها إيه",
    excerpt: "كل بيت فيه كرتونة بتحتوي على أسرار تاريخية.",
    content: [
      "تسأل: الكرتونة دي فيها إيه؟",
      "الإجابة: حاجات مهمة.",
      "إيه هي؟ محدش عارف، بس ممنوع تتفتح! 😂"
    ]
  },
  {
    id: "s1", category: "stories", label: "حكايات", emoji: "💍",
    title: "اجتماع اختيار لون الحيطة",
    excerpt: "اجتماع عاجل لحسم لون حيطة واحدة.",
    content: [
      "اتنين قرروا يختاروا لون الحيطة في ربع ساعة.",
      "بعد مقارنة العينات تحت نور النهار ونور اللمبة، ظهر سؤال جديد: طب والأثاث؟",
      "في الآخر اتفقوا على لون هادي يناسب المكان وميزانيتهم.",
      "العبرة: الاختيارات المشتركة محتاجة حوار ومرونة، مش إن حد يكسب النقاش وخلاص."
    ]
  },
  {
    id: "s2", category: "stories", label: "حكايات", emoji: "🛒",
    title: "قائمة المشتريات العبقرية",
    excerpt: "قائمة من خمس حاجات رجعت البيت بعشر حاجات غيرهم.",
    content: [
      "كتبوا قائمة واضحة عشان مفيش حاجة تتنسي.",
      "في السوبر ماركت ظهر عرض مغرٍ، وبعده عرض تاني، وبعده حاجة كانت ناقصة من زمان.",
      "رجعوا مبسوطين، لكن القائمة الأصلية لسه فيها حاجتين! 😂",
      "خلي القائمة قدامك، وحدد الأولويات قبل ما تتأثر بالعروض."
    ]
  },
  {
    id: "s3", category: "stories", label: "حكايات", emoji: "🎁",
    title: "المفاجأة اللي اتحرقت",
    excerpt: "كل الخطة كانت سرية، ما عدا الرسالة اللي اتبعتت بالغلط.",
    content: [
      "الشخص جهز مفاجأة حلوة وقرر يخليها سر.",
      "وسط الرسائل، بعت تفاصيل المفاجأة للشخص المقصود بدل صديقه اللي بيساعده!",
      "المفاجأة اتحولت لخطة إنقاذ كوميدية.",
      "العبرة: راجع اسم المستلم قبل ما تضغط إرسال! 😂"
    ]
  }
];

const grid = document.getElementById("articleGrid");
const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const resultsCount = document.getElementById("resultsCount");
const emptyMessage = document.getElementById("emptyMessage");
const dialog = document.getElementById("articleDialog");
const dialogContent = document.getElementById("dialogContent");
const shareButton = document.getElementById("shareArticle");

let activeCategory = "all";
let currentArticle = null;

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim();
}

function renderArticles() {
  const query = normalizeText(searchInput.value);

  const filtered = articles.filter(article => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;

    const searchableText = normalizeText(
      article.title + " " +
      article.excerpt + " " +
      article.label + " " +
      article.content.join(" ")
    );

    return matchesCategory && searchableText.includes(query);
  });

  grid.innerHTML = filtered.map(article => `
    <article class="article-card">
      <span class="card-emoji">${article.emoji}</span>
      <span class="card-category">${article.label}</span>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      <button class="read-link" data-open-article="${article.id}">
        اقري الموضوع ←
      </button>
    </article>
  `).join("");

  resultsCount.textContent = `عرض ${filtered.length} موضوع`;
  emptyMessage.hidden = filtered.length > 0;
}

function openArticle(id) {
  const article = articles.find(item => item.id === id);
  if (!article) return;

  currentArticle = article;

  dialogContent.innerHTML = `
    <span class="card-category">${article.emoji} ${article.label}</span>
    <h2>${article.title}</h2>
    ${article.content.map(paragraph => `<p>${paragraph}</p>`).join("")}
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    alert(article.title + "\n\n" + article.content.join("\n\n"));
  }
}

function showCategory(category) {
  activeCategory = category;

  document.querySelectorAll(".category-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === category);
  });

  renderArticles();
  document.getElementById("articles").scrollIntoView({ behavior: "smooth" });
}

categoryList.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  showCategory(button.dataset.filter);
});

searchInput.addEventListener("input", renderArticles);

document.addEventListener("click", event => {
  const openButton = event.target.closest("[data-open-article]");
  if (openButton) {
    openArticle(openButton.dataset.openArticle);
    return;
  }

  const categoryButton = event.target.closest("[data-show-category]");
  if (categoryButton) {
    showCategory(categoryButton.dataset.showCategory);
  }
});

document.getElementById("dialogClose").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

shareButton.addEventListener("click", async () => {
  if (!currentArticle) return;

  const shareText =
    `${currentArticle.title}\n${currentArticle.content.join("\n\n")}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: currentArticle.title,
        text: shareText
      });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareText);
      alert("تم نسخ نص المقال. تقدري تبعتيه لأي حد ❤️");
    } else {
      window.prompt("انسخي نص المقال من هنا:", shareText);
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      window.prompt("انسخي نص المقال من هنا:", shareText);
    }
  }
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "إغلاق القائمة" : "فتح القائمة"
  );
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح القائمة");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderArticles();
