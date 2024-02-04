if (!customElements.get('quiz-answer')) {
  customElements.define(
    'quiz-answer',
    class QuizAnswer extends HTMLElement {
      constructor() {
        super();
        this.quizId = this.dataset.quizId;
        this.backButtonElement = this.querySelector('.information-wrapper > button[name="back"]');

        if (this.backButtonElement) {
          this.backButtonElement.addEventListener('click', this.backButton.bind(this));
        }
      }

      getUserAnsewers() {
        const answers = JSON.parse(sessionStorage.getItem(`${this.quizId}-answers`));
        return answers
      }

      backButton(event) {
        const parent = event.currentTarget.closest('quiz-answer');

        const lastQuestion = document.querySelectorAll(`.section-quiz-question [data-quiz-id="${this.quizId}"]`).length;
        console.log(lastQuestion)
        const previousQuestionElement = document
          .querySelector(`quiz-question[data-quiz-id="${parent.quizId}"][data-question-number="${lastQuestion}"]`);
        console.log(previousQuestionElement)
        if (previousQuestionElement) {
          this.hideContainer(parent.closest('.quiz'))
          this.showContainer(previousQuestionElement.closest('.quiz'))
        }
      }

      updateFinalElement() {
        const answers = this.getUserAnsewers();
        if (!answers) return;

        Object.entries(answers).forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });

      }

      getAnswersData() {

      }

      hideContainer(container) {
        container.classList.remove('visible');
        container.classList.add('hidden');
      }

      showContainer(container) {
        container.classList.remove('hidden');
        container.classList.add('visible');
      }
    }
  )
}