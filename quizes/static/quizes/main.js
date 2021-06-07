console.log("hello world");

const modalBtns = [...document.getElementsByClassName("modal-button")];
const modalBody = document.getElementById("modal-body-confirm");
const modalLabel = document.getElementById("exampleModalLabel");
const startBtn = document.getElementById("start-button");

const url = window.location.href;

modalBtns.forEach((modalBtn) =>
  modalBtn.addEventListener("click", () => {
    const pk = modalBtn.getAttribute("data-pk");
    const name = modalBtn.getAttribute("data-quiz");
    const numQuestions = modalBtn.getAttribute("data-questions");
    const difficulty = modalBtn.getAttribute("data-difficulty");
    const scoreToPass = modalBtn.getAttribute("data-pass");
    const time = modalBtn.getAttribute("data-time");
    const topic = modalBtn.getAttribute("data-topic");

    modalLabel.innerHTML = `
        <div class="h5">:: ${name} ::</div>
    `;

    modalBody.innerHTML = `
        <div class="h5 mb-3">Are you sure you want to begin the quiz?</div>
        <div class="text-muted">
            <ul>
                <li>Difficulty: <b>${difficulty}</b></li>
                <li>Number of questions: <b>${numQuestions}</b></li>
                <li>Score to pass: <b>${scoreToPass}%</b></li>
                <li>Time: <b>${time} min</b></li>
            </ul>
        </div>
    `;

    startBtn.addEventListener("click", () => {
      window.location.href = url + pk;
    });
  })
);
