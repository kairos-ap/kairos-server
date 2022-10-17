import { Request, Response, NextFunction } from "express";

const hasBody = (req: Request, res: Response, next: NextFunction) => {
  if (req.body) {
    return next();
  }
  res.status(400).send("Request is missing a valid body.");
};

const hasParams = (req: Request, res: Response, next: NextFunction) => {
  if (req.params) {
    return next();
  }
  res.status(400).send("Request is missing valid params.");
};

const hasQuery = (req: Request, res: Response, next: NextFunction) => {
  if (req.query) {
    return next();
  }
  res.status(400).send("Request is missing valid query.");
};

export { hasBody, hasParams, hasQuery };
