interface IPoint {
  x: number;
  y: number;
}

export default interface IFindByPointDTO {
  start: IPoint;
  end: IPoint;
}
