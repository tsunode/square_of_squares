interface IPoint {
  x: number;
  y: number;
}

export default interface ICreateSquareDTO {
  territory_id: string;
  start: IPoint;
  end: IPoint;
  area: number;
}
