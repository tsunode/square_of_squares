interface IPoint {
  x: number;
  y: number;
}

export default interface IFindTerritoryByPointDTO {
  start: IPoint;
  end: IPoint;
}
