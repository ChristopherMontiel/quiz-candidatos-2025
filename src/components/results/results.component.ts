import { ChangeDetectionStrategy, Component, computed, EventEmitter, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Candidate, QuizResult } from '../../models/quiz.model';

interface DisplayResult {
  name: string;
  party: string;
  affinity: number;
  color: string;
  imageUrl: string;
}

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  results = input.required<QuizResult[]>();
  candidates = input.required<Candidate[]>();
  topicTitle = input.required<string>();
  isFinal = input.required<boolean>();

  @Output() next = new EventEmitter<void>();

  displayResults = computed<DisplayResult[]>(() => {
    const res = this.results();
    const cands = this.candidates();
    
    if (!res || !cands) return [];

    return res.map(result => {
      const candidate = cands.find(c => c.id === result.candidateId);
      return {
        name: candidate?.name || 'N/A',
        party: candidate?.party || 'N/A',
        affinity: result.affinity,
        color: candidate?.color || 'bg-gray-500',
        imageUrl: candidate?.imageUrl || ''
      };
    }).sort((a, b) => b.affinity - a.affinity);
  });

  onNext() {
    this.next.emit();
  }
}