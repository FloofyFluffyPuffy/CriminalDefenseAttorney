
export interface ContextType {
  scroll: number;
  scrollingDown: boolean;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
  sectionHash: string;
  setSectionHash: React.Dispatch<React.SetStateAction<string>>
}