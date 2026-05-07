// Landing page content for Corvus Debrief.

export const heroSignals = [
  {
    label: "Inputs",
    value: "MES export, ERP dump, QMS log, spreadsheet",
  },
  {
    label: "Time to brief",
    value: "Under 5 minutes",
  },
  {
    label: "Output",
    value: "Ops, quality, materials, and schedule actions",
  },
];

export const debriefPreview = [
  {
    team: "Ops",
    status: "Blocked",
    headline: "WO-4521 is stuck waiting on QA signoff",
    detail: "Blocked for 2 days. Customer order moves from green to amber if disposition misses today's standup.",
  },
  {
    team: "Materials",
    status: "Shortage",
    headline: "Part A-2847 blocks Line 3 restart",
    detail: "Two open work orders depend on the same missing component. Expedite decision needed by 1:00 PM.",
  },
  {
    team: "Quality",
    status: "Decision",
    headline: "26 out-of-spec units need disposition",
    detail: "Rework path is available, but approval will push shipment one day unless capacity is moved.",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Drop the messy export",
    description: "Upload a CSV or MES-style export without cleaning headers, dates, or status values first.",
  },
  {
    step: "02",
    title: "Corvus maps the schema",
    description: "The system normalizes fields like WO#, WorkOrder, status, operation, quantity, and notes.",
  },
  {
    step: "03",
    title: "Agents reason over signals",
    description: "Ops, quality, materials, and schedule agents identify blockers, risk, and decision points.",
  },
  {
    step: "04",
    title: "The debrief is generated",
    description: "Leaders get the meeting-ready version: what changed, what slipped, and what needs action.",
  },
  {
    step: "05",
    title: "Teams walk the findings",
    description: "Standup starts with decisions instead of spreadsheet archaeology.",
  },
];

export const teamBriefs = [
  {
    team: "Operations",
    line: "Which jobs are blocked, slipping, or ready to move.",
    example: "Line 3 downtime puts WO-4532 at risk unless maintenance clears the blocker before second shift.",
  },
  {
    team: "Quality",
    line: "Which issues need disposition, signoff, or escalation.",
    example: "WO-4589 has 26 units waiting for rework approval; no shipment decision is logged.",
  },
  {
    team: "Materials",
    line: "Which shortages constrain work orders or customer dates.",
    example: "Part A-2847 shortage affects two jobs and should be expedited before capacity is reallocated.",
  },
  {
    team: "Schedule",
    line: "Which delivery dates are now exposed by delays or rework.",
    example: "WO-4567 has a supplier slip and may miss the May 15 customer deadline.",
  },
];

export const proofPoints = [
  "No new integration required for the first demo",
  "Works from CSV and common manufacturing exports",
  "Built for the daily ops meeting, not another dashboard tab",
];

export const valueProps = [
  {
    title: "From interpretation to decisions",
    description: "Corvus removes the translation layer between raw exports and the next operational call.",
  },
  {
    title: "Team-specific intelligence",
    description: "Ops, quality, materials, and schedule teams each see the signals that matter to them.",
  },
  {
    title: "Messy data is the point",
    description: "The demo is strongest when headers are inconsistent, dates are mixed, and notes carry the truth.",
  },
  {
    title: "A debrief, not a dashboard",
    description: "The output is designed for the standup: concise, prioritized, and ready to discuss.",
  },
];
