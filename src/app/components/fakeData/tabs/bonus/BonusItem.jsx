import {
  newCustomerIcon,
  loyalCustomerIcon,
  vipCustomerIcon,
  begginerIcon,
} from "../../../../../../assets/constant/icons/icon";
const bonusItems = [
  {
    id: "1",
    title: "New Customer",
    points: "+50",
    description: "Requirements: 0–4 completed orders.",
    status: "completed",
    icon: "checkmark-circle",
    badge: begginerIcon,
    reward: "Reward: none.",
  },
  {
    id: "2",
    title: "Regular Customer",
    points: "+100",
    description: "Requirements: 5–9 completed orders.",
    status: "pending",
    icon: "time",
    badge: newCustomerIcon,
    reward: "Reward: 5% off next order.",
  },
  {
    id: "3",
    title: "Loyal Customer",
    points: "+200",
    description: "Requirements: 10–19 completed orders.",
    status: "locked",
    icon: "lock-closed",
    badge: loyalCustomerIcon,
    reward: " Reward: 10% off next order.",
  },
  {
    id: "4",
    title: "VIP Customer",
    points: "+150",
    description: "Requirements: 20+ completed orders.",
    status: "locked",
    icon: "trophy",
    badge: vipCustomerIcon,
    reward: "Reward: 20% off 1 order.",
  },
];

export default bonusItems;
