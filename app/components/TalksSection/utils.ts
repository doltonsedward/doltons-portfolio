import { TalkDataTypes } from "@/app/talks/types";
import dayjs from "dayjs";

export const getTypeColor = (type: TalkDataTypes["type"]) => {
  switch (type) {
    case "webinar":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "workshop":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "mentoring":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "conference":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
};

export const getStatusColor = (status: TalkDataTypes["status"]) => {
  switch (status) {
    case "upcoming":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200";
    case "ongoing":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "past":
      return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
};

export const formatDate = (dateString: string) => {
  return dayjs(dateString).format("MMMM D, YYYY");
};
