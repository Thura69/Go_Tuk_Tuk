import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useQuery } from "@apollo/client";
import { FilePlus2, Handshake, Users2 } from "lucide-react";
import {
  cn,
  getPostBarChart,
  generateThreeMonthChartData,
} from "../../lib/utils";
import { PostDashboard } from "../../components/dashboard/posts-dashboard";
import { ReactNode, useEffect, useState } from "react";
import {
  DASHBOARD_ALL_CUSTOMERS,
  DASHBOARD_ALL_DRIVERS,
  DASHBOARD_ALL_VEHICLE,
  GET_ALL_CUSTOMERS,
  GET_ALL_DRIVERS,
} from "../../graphql/kiloTaxi";
import { UsersAndPartners } from "../../components/dashboard/users-partners";

type CardData = {
  name: string;
  icon: ReactNode;
  count: number;
  color: string;
};

export const Dashboard = () => {
  const [postData, setPostData] = useState(null);

  const { data: CUSTOMERDATA } = useQuery(DASHBOARD_ALL_CUSTOMERS, {
    fetchPolicy: "network-only",
  });

  const { data: DRIVERSDATA } = useQuery(DASHBOARD_ALL_DRIVERS, {
    fetchPolicy: "network-only",
  });

  const { data: VECICLEDATA } = useQuery(DASHBOARD_ALL_VEHICLE, {
    fetchPolicy: "network-only",
  });

  const { data: ALLDRIVERS } = useQuery(GET_ALL_DRIVERS, {
    fetchPolicy: "network-only",
  });

  const { data: ALLCUSTOMERS } = useQuery(GET_ALL_CUSTOMERS, {
    fetchPolicy: "network-only",
  });

  const [cardData, setCardData] = useState<CardData[]>([]);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (
      CUSTOMERDATA &&
      DRIVERSDATA &&
      VECICLEDATA &&
      ALLDRIVERS &&
      ALLCUSTOMERS
    ) {
      const dataChart = generateThreeMonthChartData(
        ALLCUSTOMERS?.customers,
        ALLDRIVERS?.drivers
      );
      setData(dataChart);

      const postBarChart = getPostBarChart(ALLDRIVERS);

      setPostData(postBarChart);

      setCardData([
        {
          name: "Customers",
          icon: <Users2 />,
          count: CUSTOMERDATA.customers_aggregate.aggregate.count,
          color: "rgba(151,71,254,0.88)",
        },
        {
          name: "Drivers",
          icon: <Handshake />,
          count: DRIVERSDATA.drivers_aggregate.aggregate.count,
          color: "rgba(101,194,43,0.92)",
        },
        {
          name: "Vehicles Types",
          icon: <FilePlus2 />,
          count: VECICLEDATA.vehicle_types_aggregate.aggregate.count,
          color: "rgba(26,29,207,0.91)",
        },
      ]);
    }
  }, [CUSTOMERDATA, DRIVERSDATA, VECICLEDATA, ALLDRIVERS, ALLCUSTOMERS]);

  return (
    <div className="p-[30px] space-y-4 min-h-[calc(100svh-81px)]  bg-gray-100">
      <div className="flex gap-5 justify-between ">
        <div className="p-5 bg-white rounded-lg border text-[#423F7A]  font-bold  w-[70%] flex flex-col justify-between">
          <h3>Today Summary</h3>
          <p className="text-sm font-medium text-muted-foreground">
            Monitoring Go Tuk Tuk Insights
          </p>
          <div className="flex gap-6">
            {cardData.map((e, index) => (
              <Card
                key={index}
                className={cn(
                  `bg-[#F4E7FF] text-[#423F7A] rounded-2xl shadow border-none w-[33%]`,
                  e.name === "Customers" && "bg-[#fa919f]",
                  e.name === "Drivers" && "bg-[#f6d499]",
                  e.name === "Vehicles" && "bg-[#9efebd]"
                )}
              >
                <CardHeader>
                  <CardTitle>
                    <div
                      className={cn(
                        " inline-block shadow p-3 bg-[#FFE2E6] rounded-full",
                        e.name === "Customers" && "bg-[#fab3be]",
                        e.name === "Drivers" && "bg-[#f9deb0]",
                        e.name === "Vehicles" && "bg-[#a9fbc3]"
                      )}
                    >
                      {e.icon}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-[24px]">{e.count}</p>
                </CardContent>
                <CardFooter>
                  <p className=" font-light">{e.name}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <PostDashboard chartData={postData} />
      </div>
      <UsersAndPartners chartData={data} />
    </div>
  );
};
