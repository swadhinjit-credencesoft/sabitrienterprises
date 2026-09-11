export default function Loading() {
  return (
    <main className="loading-page" aria-busy="true" aria-label="Loading">
      <div className="loading-spinner" role="status" />
    </main>
  );
}