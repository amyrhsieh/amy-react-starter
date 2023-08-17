export interface Word {
  id: number,
  character: string,
  pinYin: string,
  tone: number
}

export type Vowel = 'a' | 'e' | 'i' | 'o' | 'u';
