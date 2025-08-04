let flashcards = [
    { question: "What is the capital of India?", answer: "New Delhi" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "HTML stands for?", answer: "HyperText Markup Language" }
  ];
  
  let current = 0;
  
  function showCard() {
    document.getElementById("question").innerText = flashcards[current].question;
    document.getElementById("answer").innerText = flashcards[current].answer;
    document.getElementById("answer").style.display = "none";
  }
  
  function showAnswer() {
    document.getElementById("answer").style.display = "block";
  }
  
  function nextCard() {
    current = (current + 1) % flashcards.length;
    showCard();
  }
  
  function prevCard() {
    current = (current - 1 + flashcards.length) % flashcards.length;
    showCard();
  }
  
  showCard();