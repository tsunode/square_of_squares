interface IPoint {
  x: number;
  y: number;
}

export default interface IFindTerritoryByOverlayDTO {
  start: IPoint;
  end: IPoint;
}
