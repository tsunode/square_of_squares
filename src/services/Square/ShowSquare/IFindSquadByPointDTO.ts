interface IPoint {
  x: number;
  y: number;
}

export default interface IFindSquadByPointDTO {
  start: IPoint;
  end: IPoint;
}
