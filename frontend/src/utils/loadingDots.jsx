function LoadingDots() {
  return (
    <span className="ml-1 inline-flex">
      <span className="animate-bounce [animation-delay:0ms] text-4xl font-extrabold mr-0.5">
        .
      </span>
      <span className="animate-bounce [animation-delay:150ms] text-4xl font-extrabold mr-0.5">
        .
      </span>
      <span className="animate-bounce [animation-delay:300ms] text-4xl font-extrabold mr-0.5">
        .
      </span>
    </span>
  );
}

export default LoadingDots;
