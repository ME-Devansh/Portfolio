import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4cd24a474eb1df2602003f3a224a2c8d@o4507632157458432.ingest.us.sentry.io/4507632161652736",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],
});
