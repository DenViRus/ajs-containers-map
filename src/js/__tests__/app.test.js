import { ErrorRepository } from '../app.js';

test('check known error, number', () => {
  const myErrRepo = new ErrorRepository();

  const received = myErrRepo.translate(400);
  const expected = `'🔴' - Bad Request`;

  expect(received).toEqual(expected);
});

test('check known error, string', () => {
  const myErrRepo = new ErrorRepository();

  const received = myErrRepo.translate('402');
  const expected = `'🔴' - Payment Required`;

  expect(received).toEqual(expected);
});

test('check known error, Unknown error', () => {
  const myErrRepo = new ErrorRepository();

  const received = myErrRepo.translate(520);
  const expected = `'🔴' - Unknown Error`;

  expect(received).toEqual(expected);
});

test('check unknown error', () => {
  const myErrRepo = new ErrorRepository();

  const received = myErrRepo.translate(600);
  const expected = `'😡' - Unknown Error`;

  expect(received).toEqual(expected);
});

test('check unknown error', () => {
  const myErrRepo = new ErrorRepository();

  const received = myErrRepo.translate('XXX');
  const expected = `'😡' - Unknown Error`;

  expect(received).toEqual(expected);
});
