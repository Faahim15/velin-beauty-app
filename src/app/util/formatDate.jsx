// Place this utility function at the top of your file or in a utils file
function FormatDate(date) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
export default FormatDate;
