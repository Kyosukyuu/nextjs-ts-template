const fetcher = async (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((r) => r.json());
export default fetcher;
