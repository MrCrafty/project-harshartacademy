export type Data = {
  id: number;
  attributes: Attributes;
};
type Attributes = {
  Title: string;
  Description: string;
  Fees: number;
  AgeGroup: string;
  DaysOfClasses: string;
};

export type Course = {
  Title: string;
  Description: string;
  Fees: number;
  AgeGroup: string;
  DaysOfClasses: string;
}