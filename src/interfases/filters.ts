export interface IFilterState {
  page: number;
  name: string;
  status: string;
  species: string;
}

export interface IFilterContextProps {
  filters: IFilterState;
  setFilter: (key: keyof IFilterState, value: string | number) => void;
};