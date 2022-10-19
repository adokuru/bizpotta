import React, { useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineLineChart, AiOutlineMenu } from "react-icons/ai";
import LChart from "./Line-Chart";
import { GoSettings } from "react-icons/go";
import { MdOutlineArrowUpward } from "react-icons/md";
import moment from "moment";
import { AffiliateSection, MainTableFooter } from "./Main/Content";
import { Filter, NoActivities } from "../../../public";
import CreatorTable from "../../Tables/CreatorTable";

const IncomeTableChart = () => {
  const data1 = [
    {
      item: 1,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 2,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 3,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 4,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 5,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 6,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
  ];
  const data = data1.map((item) => {
    return {
      id: item.item,
      customerID: item.ID,
      InvoiceId: item.name,
      course: item.course,
      price: item.price,
      date: moment(item.created_at).format("DD MMM YYYY"),
    };
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "ID",
        accessor: "customerID",
      },
      {
        Header: "Name",
        accessor: "InvoiceId",
      },
      {
        Header: " Course Title",
        accessor: "course",
      },
      {
        Header: " Price",
        accessor: "price",
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  const [select, setSelected] = useState("table");
  const [showFilter, setShowFilter] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const activities = true;

  return (
    <div className='flex flex-col mx-auto'>
      {!activities && (
        <div className='w-full h-[450px] centerFlex'>
          <NoActivities />
        </div>
      )}

      {activities && <CreatorTable columns={columns} data={data} title='Income' showFilter={showFilter} showExport={showExport} />}
    </div>
  );
};

export default IncomeTableChart;
