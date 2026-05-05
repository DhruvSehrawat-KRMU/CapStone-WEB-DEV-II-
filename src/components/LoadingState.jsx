function LoadingState({ text = "Loading..." }) {
  return (
    <div className="text-center p-6">
      
      <div className="loader"></div>

      <p>{text}</p>

    </div>
  );
}

export default LoadingState;