function startMarriage() {
    document.getElementById("message").innerText =
        "🚨 تنبيه يا عروسة! لجنة اختيار العريس بدأت التحقيق 😂💍";
}

function chooseGroom(type) {
    let result = "";

    if (type === "الغني 💰") {
        result = "💰 مبروك! بس اتأكدي إن الغنى مش في الأحلام!";
    } else if (type === "الرومانسي 🌹") {
        result = "🌹 يا سلام! المهم الرومانسية متخلصش بعد الخطوبة!";
    } else if (type === "اللي بيسمع الكلام 🤫") {
        result = "😂 ده غالبًا محتاجين نتأكد من المعلومة دي!";
    } else if (type === "ابن أمه 😂") {
        result = "📞 حماتك المستقبلية داخلة على الخط!";
    }

    document.getElementById("groomResult").innerText = result;
}
