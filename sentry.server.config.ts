import * as Sentry from "@sentry/nextjs";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const initSentry = (runtime: "nodejs" | "edge") => {
  Sentry.init({});
};
