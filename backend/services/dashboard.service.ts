

import Lead from "../models/Lead";

export const getDashboardStats = async () => {
  const totalLeads = await Lead.countDocuments();

  const qualifiedLeads = await Lead.countDocuments({
    status: "Qualified",
  });

  const wonLeads = await Lead.countDocuments({
    status: "Won",
  });

  const thisMonth = new Date();
  thisMonth.setDate(1);

  const monthlyLeads = await Lead.countDocuments({
    createdAt: {
      $gte: thisMonth,
    },
  });

  const conversionRate =
    totalLeads === 0
      ? 0
      : Number(((wonLeads / totalLeads) * 100).toFixed(1));

  return {
    totalLeads,
    qualifiedLeads,
    conversionRate,
    monthlyGrowth: monthlyLeads,
  };
};

export const getDashboardData = async () => {
  // Pipeline (1 query)
  const pipelineResult = await Lead.aggregate([
    {
      $group: {
        _id: "$status",
        value: {
          $sum: 1,
        },
      },
    },
  ]);

  const statuses = [
    "New",
    "Contacted",
    "Qualified",
    "Proposal Sent",
    "Won",
    "Lost",
  ];

  const pipeline = statuses.map((status) => ({
    label: status,
    value:
      pipelineResult.find((item) => item._id === status)?.value || 0,
  }));

  const recentLeads = await Lead.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .select("company name email status createdAt");

  const recentActivity = recentLeads.map((lead) => ({
    _id: lead._id,
    user: lead.name,
    action: "created a lead for",
    lead: lead.company || "Unknown Company",
    time: new Date(lead.createdAt).toLocaleString(),
  }));

  const leadTrend = await Lead.aggregate([
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$createdAt",
          },
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
    {
      $limit: 7,
    },
  ]);

  return {
    pipeline,
    recentLeads,
    recentActivity,
    leadTrend,
  };
};