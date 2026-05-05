function ErrorState({ message, onRetry }) {
  return (
    <div className="error-box">
      <h2>Error occurred</h2>

      <p>{message}</p>

      {onRetry && (
        <button onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorState;