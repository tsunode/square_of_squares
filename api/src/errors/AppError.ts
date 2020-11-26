class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly isCelebrate: boolean;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
