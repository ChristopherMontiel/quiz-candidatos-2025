import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './services/quiz.service';
import { Candidate, Question, QuizResult, Topic, UserAnswer } from './models/quiz.model';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultsComponent } from './components/results/results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, QuizComponent, ResultsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private quizService = inject(QuizService);
  
  // State Signals
  quizState = signal<'start' | 'quiz' | 'partial_results' | 'final_results'>('start');
  quizData = signal<Topic[]>([]);
  candidates = signal<Candidate[]>([]);
  currentTopicIndex = signal(0);
  currentQuestionIndex = signal(0);
  userAnswers = signal<{[questionId: string]: number}>({});
  
  // Results Signals
  partialResults = signal<QuizResult[]>([]);
  finalResults = signal<QuizResult[]>([]);

  // Derived Signals (Computed)
  currentTopic = computed(() => this.quizData()[this.currentTopicIndex()]);
  currentQuestion = computed(() => this.currentTopic()?.questions[this.currentQuestionIndex()]);

  constructor() {
    this.quizData.set(this.quizService.getQuizData());
    this.candidates.set(this.quizService.getCandidates());
  }

  startQuiz() {
    this.quizState.set('quiz');
  }

  handleAnswer(answer: UserAnswer) {
    this.userAnswers.update(answers => ({...answers, [answer.questionId]: answer.score}));
    // Auto-advance removed. User now clicks 'Siguiente'.
  }
  
  showCandidateHintForCurrentQuestion() {
    const questionId = this.currentQuestion()?.id;
    if (questionId) {
       // This logic is now handled inside quiz.component
    }
  }

  goToNextQuestion() {
    const topic = this.currentTopic();
    if (!topic) return;

    if (this.currentQuestionIndex() < topic.questions.length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
    } else {
      // End of topic
      this.calculatePartialResults();
      this.quizState.set('partial_results');
    }
  }

  goToPreviousQuestion() {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update(i => i - 1);
    } else if (this.currentTopicIndex() > 0) {
        const prevTopicIndex = this.currentTopicIndex() - 1;
        const prevTopic = this.quizData()[prevTopicIndex];
        this.currentTopicIndex.set(prevTopicIndex);
        this.currentQuestionIndex.set(prevTopic.questions.length - 1);
    }
  }

  continueToNextTopic() {
    if (this.currentTopicIndex() < this.quizData().length - 1) {
      this.currentTopicIndex.update(i => i + 1);
      this.currentQuestionIndex.set(0);
      this.quizState.set('quiz');
    } else {
      this.calculateFinalResults();
      this.quizState.set('final_results');
    }
  }

  restartQuiz() {
    this.currentTopicIndex.set(0);
    this.currentQuestionIndex.set(0);
    this.userAnswers.set({});
    this.quizState.set('start');
  }

  calculatePartialResults() {
    const topic = this.currentTopic();
    if (!topic) return;
    this.partialResults.set(this.calculateAffinities(topic.questions));
  }

  calculateFinalResults() {
    const allQuestions = this.quizData().flatMap(topic => topic.questions);
    this.finalResults.set(this.calculateAffinities(allQuestions));
  }
  
  calculateAffinities(questions: Question[]): QuizResult[] {
    const maxDifference = 4 * questions.length; // Max diff per question is 4 (5-1)

    return this.candidates().map(candidate => {
      let totalDifference = 0;
      questions.forEach(question => {
        const userAnswer = this.userAnswers()[question.id];
        const candidateStance = question.stances.find(s => s.candidateId === candidate.id)?.score;
        
        if (userAnswer !== undefined && candidateStance !== undefined) {
          totalDifference += Math.abs(userAnswer - candidateStance);
        }
      });
      
      const affinity = Math.round(100 * (1 - (totalDifference / maxDifference)));
      return { candidateId: candidate.id, affinity };
    });
  }
}