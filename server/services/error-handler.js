class NotFoundError extends Error {
  constructor() {
      super();
      this.status = 404;
      this.message = "Not found";
  }
}

class InputError extends Error {
  constructor() {
      super();
      this.status = 400;
      this.message = "Bad request";
  }
}

class DuplicateError extends Error {
  constructor() {
      super();
      this.status = 409;
      this.message = "already exists.";
  }
}

class ServerError extends Error {
  constructor() {
      super();
      this.status = 500;
      this.message = "Something went wrong";
  }
}

module.exports = {
  NotFoundError,
  InputError,
  DuplicateError,
  ServerError
};