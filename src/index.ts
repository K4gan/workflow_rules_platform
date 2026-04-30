type Decision = "allow" | "deny" | "review";

interface Context {
  tenant: string;
  route: string;
  risk: number;
  claims: string[];
}

interface Rule {
  id: string;
  evaluate(context: Context): Decision;
}

const rules: Rule[] = [
  { id: "missing-tenant", evaluate: (context) => context.tenant.length === 0 ? "deny" : "allow" },
  { id: "high-risk", evaluate: (context) => context.risk >= 80 ? "review" : "allow" },
  { id: "admin-route", evaluate: (context) => context.route.startsWith("/admin") && !context.claims.includes("admin") ? "deny" : "allow" }
];

function decide(context: Context): { decision: Decision; trace: string[] } {
  const trace: string[] = [];
  let finalDecision: Decision = "allow";
  for (const rule of rules) {
    const result = rule.evaluate(context);
    trace.push(`${rule.id}:${result}`);
    if (result === "deny") return { decision: "deny", trace };
    if (result === "review") finalDecision = "review";
  }
  return { decision: finalDecision, trace };
}

const result = decide({ tenant: "acme", route: "/admin/reports", risk: 42, claims: ["analyst"] });
console.log(JSON.stringify(result, null, 2));
