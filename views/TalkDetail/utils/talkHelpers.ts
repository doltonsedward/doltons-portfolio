/**
 * Utility functions for talk detail components
 */

export const getTypeColor = (type: string): string => {
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

export const getStatusColor = (status: string): string => {
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

export const formatTalkDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
};

export const generateEmailSubject = (talkTitle: string): string => {
  return `Speaking Opportunity - Inspired by "${talkTitle}"`;
};

export const generateEmailBody = (talkTitle: string): string => {
  return `Hi Doltons,

I came across your talk "${talkTitle}" and was impressed by your expertise. I'd like to discuss a potential speaking opportunity for our event/organization.

Could we schedule a time to chat about this?

Best regards,`;
};
