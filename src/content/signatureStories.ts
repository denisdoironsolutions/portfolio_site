// Signature-story canon for denisdoiron.solutions.
// Copy source of truth: D:\PKB\Team Inbox\Harper\Signature_Stories_Final_Copy.md (v3).
// Status: v3 — Jack claims-review applied; Story 1 substantiation softening applied.

export type SignatureStory = {
  id: string;
  num: string;
  category: string;
  problemHeadline: string;
  clientDescriptor: string;
  bodyShort: string;
  bodyLong: string[]; // rendered as <p> per entry on the Stories page
  outcome: string;
  scale: string;
};

export const signatureStories: SignatureStory[] = [
  {
    id: 'partner-rescue-retainer',
    num: '01',
    category: 'Implementation Rescue · Multi-year partner retainer',
    problemHeadline:
      'Between 2013 and 2016, one SAP partner flew me into project after project that had gone sideways — and the shape of the trouble was different every time.',
    clientDescriptor:
      'A North American SAP Business One partner. 2013–2016. Multiple rescue engagements across that span.',
    bodyShort:
      "Between 2013 and 2016, one SAP partner flew me in to help with their implementations in trouble. Scoping misses, difficult customers, consultant mismatches — projects over budget and under pressure. I'd land with little onboarding, diagnose the real problem inside a day, and hand the partner and the customer a correction plan both could sign. What started as hostile territory became a three-year relationship — the partner kept booking the next flight.",
    bodyLong: [
      "Between 2013 and 2016, one SAP Business One partner built a rescue practice around me. Seven or eight times across those three years, I was flown into an ongoing implementation that had gone sideways — projects over budget, customers losing patience, sometimes both. The shape of the trouble varied. A scoping document that had promised what the product couldn't do. A customer whose internal politics had derailed the engagement. A consultant whose depth hadn't matched the complexity of the build. The partner didn't send me a briefing document. They booked the flight, and I read the situation on arrival.",
      "What they needed each time was the same: a senior consultant who could walk into hostile territory with minimal onboarding, assess the situation inside a day, and hand back a written correction plan that both the partner and the end customer could sign off on. That meant listening before diagnosing — to the primary consultants, the project manager, the customer's operational staff, and the customer's executive sponsor. Most rescue situations aren't purely technical. They're technical plus political, and treating one without the other guarantees a second rescue engagement six months later.",
      "The correction plans covered different ground depending on what I found. Some were re-scopes — cutting the feature set back to what the timeline could support and protecting the relationship by delivering a smaller, working system on the date the customer had committed to internally. Some were architectural — a redesigned integration, a data-migration plan that actually worked, an addon that replaced a workflow the configuration couldn't cover. Some were mostly interpersonal — clearing the air between the partner's team and the customer's, resetting expectations, and giving both sides something they could agree to stand on.",
      "The outcome of the tenure was the durable part. The partner kept calling because the pattern held: hostile territory became landed projects, and the next flight was already booked before I was home from the last one. The relationship ran for three years on the strength of that pattern — which from my vantage was proof enough.",
    ],
    outcome:
      'Hostile territory became landed projects. The partner kept booking the next flight for three years.',
    scale: '2013–2016 · 7–8 rescue engagements',
  },
  {
    id: 'defense-manufacturer-golive',
    num: '02',
    category: 'Implementation Leadership · High-stakes manufacturing',
    problemHeadline:
      "A large SAP Business One go-live for a manufacturer producing under US military contracts — multiple consultants on the ground, over a hundred users depending on the date, and a date that couldn't move.",
    clientDescriptor:
      'A North American manufacturer producing under US military contracts. 100+ users on go-live day. Still in production on SAP today.',
    bodyShort:
      'An SAP partner hired me to coordinate a large Business One go-live for a North American manufacturer producing under US military contracts. Multiple consultants on the ground, over a hundred users depending on the date, showstopper bugs threatening the schedule. My job was to read the whole engagement — modules, consultants, blocking issues — and solve whatever stood between the team and the date. The go-live landed on schedule. As far as I know, the customer is still running on SAP today.',
    bodyLong: [
      "An SAP Business One partner brought me in to coordinate a large-scale go-live for a North American manufacturer operating under US military contracts. The deployment would put over a hundred users on SAP on day one, and the go-live date was not a date the partner or the customer could move. Defense-contract manufacturing doesn't tolerate uncertainty in a shipping system.",
      "My role wasn't to own a single module. It was to own the blocking risk — to keep the go-live on its feet by finding and solving every showstopper across a team of consultants working in parallel. That's a different job than senior consultant on a project. It requires assimilating a lot of complex context — schema decisions, customization scope, integration touchpoints, data-migration state, outstanding defects — from multiple consultants, each of whom has their own partial view of the engagement. And it requires spotting the solutions other people on the team haven't.",
      "Go-live landed on schedule. Over a hundred users came online on the day they were supposed to. The customer, as far as I know, is still running on SAP today — which for a defense-contract manufacturer with the compliance requirements they live under is the outcome that actually matters. A go-live that works on day one is the easy metric. A system that's still the right system years later is the one that tells you the implementation was sound.",
    ],
    outcome: 'Go-live on schedule. Over 100 users live on day one. Still running on SAP today.',
    scale: '100+ users · multiple consultants coordinated · still in production',
  },
  {
    id: 'sql-transaction-reconstruction',
    num: '03',
    category: 'Rescue · SDK · Data forensics',
    problemHeadline:
      "A custom wood furniture manufacturer couldn't manufacture or ship. Severe SQL Server corruption, due to a power-outage, had taken out their key SAP tables — ten years of transaction history, effectively unreadable.",
    clientDescriptor:
      'A custom wood furniture manufacturer in North America. ~5 million transactions across 10 years of operations. Rebuilt in roughly three weeks.',
    bodyShort:
      "A custom wood furniture manufacturer lost access to ten years of transaction history when severe SQL Server corruption took out their key SAP database. Without the data, they couldn't manufacture or ship. It took roughly three weeks to rebuild it. Reading the corrupted tables directly wasn't possible, so I wrote a DI API system that reconstructed every transaction — roughly five million of them — from the surrounding tables that had survived. The new SAP company has been live for a year without an issue.",
    bodyLong: [
      "A custom wood furniture manufacturer in North America discovered they could no longer manufacture or ship. A severe SQL Server corruption had taken out core tables in their SAP Business One company database — ten years of transaction history, effectively unreadable. Without that history, inventory positions were wrong, open orders couldn't be trusted, and the business couldn't operate. The partner who called me didn't have weeks to diagnose the corruption. They had weeks to rebuild the system.",
      "The only viable path was to reconstruct every transaction from the prior ten years into a fresh, clean SAP company — and then cut the business over to it. That would have been a large undertaking under normal circumstances. What made it exceptional was that many of the source tables couldn't be read directly. The corruption had compromised exactly the tables you'd reach for first.",
      "That is where twenty-four years of SAP Business One experience earned its keep. Every posted transaction in SAP touches multiple tables — a transaction isn't a single row in one place. When the primary table is unreadable, a great deal of the same information is sitting in surrounding tables that participated in the same posting: journal-entry lines that reference the source document, inventory movements that record the same transaction from a different angle, open-item tables that carry their own view of what happened. I wrote a DI API-based reconstruction system that triangulated each transaction from whichever combination of surrounding tables had survived, then posted the reconstructed transactions cleanly into the new company. Every trick in the SAP Business One playbook I've built over two decades got a turn.",
      'The reconstruction ran across roughly five million transactions covering ten years of the customer\'s operations. The cutover was delivered in about three weeks from the day I was called in. The new system has been live for a year and continues to run, without an issue — the closest thing to proof you can offer that a reconstruction of this kind was done correctly.',
    ],
    outcome:
      '~5 million transactions reconstructed in three weeks. Live for a year on the new system without an issue.',
    scale: '~5M transactions · 10 years of history · rebuilt in ~3 weeks',
  },
];
