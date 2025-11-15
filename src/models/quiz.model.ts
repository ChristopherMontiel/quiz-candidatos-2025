export interface Candidate {
  id: 'kast' | 'parisi' | 'kaiser' | 'jara';
  name: string;
  party: string;
  color: string;
  imageUrl: string;
}

export interface Stance {
  candidateId: 'kast' | 'parisi' | 'kaiser' | 'jara';
  score: 1 | 2 | 3 | 4 | 5; // 1: Completamente en Desacuerdo, 5: Completamente de Acuerdo
}

export interface Question {
  id: string;
  text: string;
  associatedCandidateId: 'kast' | 'parisi' | 'kaiser' | 'jara';
  stances: Stance[];
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  questions: Question[];
}

export interface UserAnswer {
  questionId: string;
  score: number;
}

export interface QuizResult {
  candidateId: string;
  affinity: number;
}