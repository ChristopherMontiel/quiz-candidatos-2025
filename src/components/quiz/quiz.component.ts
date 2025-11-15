import { ChangeDetectionStrategy, Component, computed, EventEmitter, input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Candidate, Question, Topic, UserAnswer } from '../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {
  topics = input.required<Topic[]>();
  currentTopicIndex = input.required<number>();
  currentQuestionIndex = input.required<number>();
  userAnswers = input.required<{ [questionId: string]: number }>();
  candidates = input.required<Candidate[]>();

  @Output() answer = new EventEmitter<UserAnswer>();
  @Output() previousQuestion = new EventEmitter<void>();
  @Output() nextQuestion = new EventEmitter<void>();

  currentTopic = computed(() => this.topics()[this.currentTopicIndex()]);
  currentQuestion = computed(() => this.currentTopic()?.questions[this.currentQuestionIndex()]);
  
  totalQuestions = computed(() => this.topics().flatMap(t => t.questions).length);
  answeredQuestionsCount = computed(() => {
      let count = 0;
      for (let i = 0; i < this.currentTopicIndex(); i++) {
          count += this.topics()[i].questions.length;
      }
      count += this.currentQuestionIndex();
      return count;
  });

  progressPercentage = computed(() => {
    if (this.totalQuestions() === 0) return 0;
    // We add 1 if an answer has been given for the current question
    const answeredCurrent = this.userAnswers()[this.currentQuestion()?.id ?? ''] !== undefined;
    const answeredCount = this.answeredQuestionsCount() + (answeredCurrent ? 1 : 0);
    return Math.round((answeredCount / this.totalQuestions()) * 100);
  });
  
  associatedCandidate = computed(() => {
    const assocId = this.currentQuestion()?.associatedCandidateId;
    if (!assocId) return null;
    return this.candidates().find(c => c.id === assocId);
  });
  
  isAnswered = computed(() => {
    const qId = this.currentQuestion()?.id;
    return qId ? this.userAnswers()[qId] !== undefined : false;
  });


  onAnswer(score: number) {
    if (this.isAnswered()) return;

    const questionId = this.currentQuestion()?.id;
    if (questionId) {
      this.answer.emit({ questionId, score });
    }
  }

  onPrevious() {
    this.previousQuestion.emit();
  }

  onNext() {
    this.nextQuestion.emit();
  }
}