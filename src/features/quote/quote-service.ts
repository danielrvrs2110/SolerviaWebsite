export type QuotePayload = { name: string; company: string; email: string; phone: string; business: string; goal: string; currentProcess: string; projectType: string; preferredContact: string };

export async function submitQuote(payload: QuotePayload, options?: { simulateError?: boolean }) {
  // Development adapter: local validation only; no transmission or persistence.
  // A real endpoint must validate again on the server when a public channel exists.
  void payload;
  if (options?.simulateError) throw new Error("Simulated development error");
  return { prepared: true } as const;
}
