interface Memo {
  id: string;
  serialNumber: string;
  title: string;
  sentFrom: string;
  sentTo: string;
  status: string;
}

const memo: Memo[] = [
  {
    id: "1",
    serialNumber: "01",
    title: "Operations memo",
    sentFrom: "Otor Jhon",
    sentTo: "Ibrahim Sadiq",
    status: "Pending",
  },
  {
    id: "2",
    serialNumber: "02",
    title: "Financial Report",
    sentFrom: "Emily Smith",
    sentTo: "Michael Johnson",
    status: "Approved",
  },
  {
    id: "3",
    serialNumber: "03",
    title: "Meeting Minutes",
    sentFrom: "David Lee",
    sentTo: "Sophia Wang",
    status: "Declined",
  },
  {
    id: "4",
    serialNumber: "04",
    title: "Project Proposal",
    sentFrom: "Alexandre Dubois",
    sentTo: "Maria Garcia",
    status: "Pending",
  },
  {
    id: "5",
    serialNumber: "05",
    title: "Training Schedule",
    sentFrom: "Jennifer Patel",
    sentTo: "Chen Wei",
    status: "Pending",
  },
  {
    id: "6",
    serialNumber: "06",
    title: "Policy Update",
    sentFrom: "Nathan Brown",
    sentTo: "Anusha Kumar",
    status: "Approved",
  },
  {
    id: "7",
    serialNumber: "07",
    title: "Product Launch Brief",
    sentFrom: "Sophie Martin",
    sentTo: "Luis Hernandez",
    status: "Declined",
  },
  {
    id: "8",
    serialNumber: "08",
    title: "Customer Feedback Summary",
    sentFrom: "Lucas Anderson",
    sentTo: "Elena Petrova",
    status: "Approved",
  },
  {
    id: "9",
    serialNumber: "09",
    title: "Monthly Performance Report",
    sentFrom: "Mia Johnson",
    sentTo: "Ahmed Khan",
    status: "Pending",
  },
  {
    id: "10",
    serialNumber: "10",
    title: "Employee Handbook Updates",
    sentFrom: "Aisha Al-Mansoori",
    sentTo: "Giovanni Rossi",
    status: "Pending",
  },
  {
    id: "11",
    serialNumber: "11",
    title: "Marketing Strategy Proposal",
    sentFrom: "Lei Wang",
    sentTo: "Daniel Rodriguez",
    status: "Pending",
  },
];
export { memo };
