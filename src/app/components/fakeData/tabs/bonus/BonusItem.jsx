const bonusItems = [
  {
    id: "1",
    title: "New Customer",
    points: "+50",
    description: "Requirements: 0–4 completed orders. Reward: none.",
    status: "completed",
    icon: "checkmark-circle",
    badge: "leaf-outline",
  },
  {
    id: "2",
    title: "Regular Customer",
    points: "+100",
    description:
      "Requirements: 5–9 completed orders. Reward: 5% off next order.",
    status: "pending",
    icon: "time",
    badge: "sparkles-outline",
  },
  {
    id: "3",
    title: "Loyal Customer",
    points: "+200",
    description:
      "Requirements: 10–19 completed orders. Reward: 10% off next order.",
    status: "locked",
    icon: "lock-closed",
    badge: "flame-outline",
  },
  {
    id: "4",
    title: "VIP Customer",
    points: "+150",
    description: "Requirements: 20+ completed orders. Reward: 20% off 1 order.",
    status: "locked",
    icon: "trophy",
    badge: "trophy-outline",
  },
];
export default bonusItems;
