interface PaymentVoucher {
  id: string;
  serialNumber: string;
  subject: string;
  date: string;
  status: string;
}

const paymentVouchers: PaymentVoucher[] = [
  {
    id: "1",
    serialNumber: "01",
    subject: "Request for FARS for October 2022",
    date: "25/01/2023",
    status: "Pending",
  },
  {
    id: "2",
    serialNumber: "02",
    subject: "Request for project proposal fee",
    date: "19/01/2023",
    status: "Approved",
  },
  {
    id: "3",
    serialNumber: "03",
    subject: "Payment for software licenses",
    date: "10/02/2023",
    status: "Rejected",
  },
  {
    id: "4",
    serialNumber: "04",
    subject: "Payment for office rent",
    date: "15/02/2023",
    status: "Pending",
  },
  {
    id: "5",
    serialNumber: "05",
    subject: "Payment for marketing services",
    date: "28/02/2023",
    status: "Approved",
  },
  {
    id: "6",
    serialNumber: "06",
    subject: "Payment for employee training",
    date: "05/03/2023",
    status: "Rejected",
  },
  {
    id: "7",
    serialNumber: "07",
    subject: "Payment for travel expenses",
    date: "12/03/2023",
    status: "Pending",
  },
  {
    id: "8",
    serialNumber: "08",
    subject: "Payment for website hosting",
    date: "18/03/2023",
    status: "Approved",
  },
  {
    id: "9",
    serialNumber: "09",
    subject: "Payment for utilities",
    date: "25/03/2023",
    status: "Rejected",
  },
  {
    id: "10",
    serialNumber: "10",
    subject: "Payment for office supplies",
    date: "01/04/2023",
    status: "Pending",
  },
  {
    id: "11",
    serialNumber: "11",
    subject: "Payment for consulting services",
    date: "08/04/2023",
    status: "Approved",
  },
];

export { paymentVouchers };
