export type Incidence = {
  id: number;
  name: string;
  population: number;
  cases: number;
  deaths: number;
  casesPerWeek: number;
  deathsPerWeek: number;
  recovered: number;
  abbreviation: string;
  weekIncidence: number;
  casesPer100k: number;
  delta: Delta;
  hospitalization: Hospitalization;
};

type Delta = {
  cases: number;
  deaths: number;
  recovered: number;
  weekIncidence: number;
};

type Hospitalization = {
  cases7Days: number;
  incidence7Days: number;
  date: string;
  lastUpdate: string;
};
