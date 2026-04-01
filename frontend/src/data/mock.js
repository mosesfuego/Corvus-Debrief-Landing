// Mock data for Corvus MFG landing page

export const sampleReport = {
  reportDate: "May 15, 2025",
  sections: [
    {
      title: "Blocked",
      status: "critical",
      items: [
        {
          id: "WO-4521",
          description: "Waiting on QA signoff",
          blockedFor: "2 days"
        },
        {
          id: "WO-4498",
          description: "Missing component: Part #A-2847",
          blockedFor: "1 day"
        }
      ]
    },
    {
      title: "At Risk",
      status: "warning",
      items: [
        {
          id: "WO-4567",
          description: "Delayed 2 days, supplier issue",
          impact: "May miss customer deadline"
        },
        {
          id: "WO-4532",
          description: "Machine downtime on Line 3",
          impact: "30% capacity reduction"
        },
        {
          id: "WO-4501",
          description: "Rework in progress, cycle 2",
          impact: "Extended lead time"
        }
      ]
    },
    {
      title: "Needs Decision",
      status: "action",
      items: [
        {
          id: "WO-4589",
          description: "Approve rework for out-of-spec units",
          decision: "26 units awaiting disposition"
        },
        {
          id: "WO-4512",
          description: "Expedite shipping or wait for full batch?",
          decision: "Partial shipment available"
        }
      ]
    }
  ]
};

export const howItWorksSteps = [
  {
    step: 1,
    title: "Upload your data",
    description: "CSV file or MES export from your production system"
  },
  {
    step: 2,
    title: "Corvus analyzes builds and workflows",
    description: "Automatically identifies issues, delays, and blockers"
  },
  {
    step: 3,
    title: "Receive a clear daily report",
    description: "Actionable insights delivered to your team"
  }
];

export const valueProps = [
  {
    title: "Reduce cognitive load",
    description: "Stop piecing together information from multiple spreadsheets"
  },
  {
    title: "Save time in meetings",
    description: "Start standups with clear, shared context"
  },
  {
    title: "Make faster decisions",
    description: "See what needs action, not just what happened"
  },
  {
    title: "Less manual digging",
    description: "Get answers without hunting through data"
  }
];
