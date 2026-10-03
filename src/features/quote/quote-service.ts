export type QuotePayload = { name: string; company: string; email: string; phone: string; business: string; goal: string; currentProcess: string; projectType: string; preferredContact: string };

export async function submitQuote(payload: QuotePayload, options?: { simulateError?: boolean }) {
  // DEVELOPMENT ADAPTER: no information is transmitted or persisted.
  // Replace this delay with a POST to a server-side endpoint in the backend phase.
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (options?.simulateError) throw new Error("Simulated development error");
  return { accepted: true, reference: `DEV-${payload.email.length}` } as const;
}
