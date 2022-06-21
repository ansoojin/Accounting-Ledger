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

class UnauthorizedError extends Error {
  constructor() {
      super();
      this.status = 401;
      this.message = "Unauthorized";
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
  UnauthorizedError,
  DuplicateError,
  ServerError
};