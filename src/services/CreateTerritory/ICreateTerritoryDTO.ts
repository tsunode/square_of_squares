interface IPoint {
  x: number;
  y: number;
}

export default interface ICreateTerritoryDTO {
  name: string;
  start: IPoint;
  end: IPoint;
}
