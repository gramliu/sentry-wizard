export const ERROR_BOUNDARY_TEMPLATE_V2 = `const ErrorBoundary = () => {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);
  return <div>Something went wrong</div>;
};
`;

export const HANDLE_ERROR_TEMPLATE_V2 = `function handleError(error, { request }) {
  Sentry.captureRemixServerException(error, 'remix.server', request);
}
`;

export const EXAMPLE_PAGE_TEMPLATE = `async function throwClientError() {
  throw new Error('Sentry Example Client Error');
}

export default function SentryExamplePage() {
  return (
    <div>
      <button type="button" onClick={throwClientError}>
        Throw Example Error
      </button>
    </div>
  );
}
`
