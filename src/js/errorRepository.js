export class ErrorRepository {
  constructor() {
    this.errorRepo = new Map([
      ['400', `'🔴' - Bad Request`],
      ['401', `'🔴' - Unauthorized`],
      ['402', `'🔴' - Payment Required`],
      ['404', `'🔴' - Not Found`],
      ['500', `'🔴' - Internal Server Error`],
      ['503', `'🔴' - Service Unavailable`],
      ['522', `'🔴' - Connection Timed Out`],
      ['520', `'🔴' - Unknown Error`],
    ]);
  }

  translate(code) {
    return (this.errorRepo.get(code.toString())) ? this.errorRepo.get(code.toString()) : `'😡' - Unknown Error`;
  }
}
