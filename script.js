
function generatePost() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");
  if (!prompt.trim()) {
    output.innerText = "رجاءً اكتب فكرة البوست أولاً!";
    return;
  }

  const examples = [
    "بوست إبداعي عن " + prompt,
    "منشور تحفيزي: لا تستسلم، " + prompt + " هو مجرد بداية.",
    "بوست تسويقي جذاب عن " + prompt + " يجذب الانتباه.",
    "بوست معلوماتي سريع عن " + prompt + " لمتابعينك."
  ];

  const randomIndex = Math.floor(Math.random() * examples.length);
  output.innerText = examples[randomIndex];
}
