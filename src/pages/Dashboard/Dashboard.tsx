import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useQuery } from "@apollo/client";
import { DASHBOARD_ALL_USERS } from "../../graphql/quires";
import { UserIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { PostDashboard } from "../../components/dashboard/posts-dashboard";
import { UsersAndPartners } from "../../components/dashboard/users-partners";

const date = new Date();
const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

const SAMPLEDATA = [
  {
    name: "Users",
    count: 100,
    color: "#FFE2E6",
  },
  {
    name: "Partners",
    count: 10,
    color: "#FFF3DE",
  },
  {
    name: "Posts",
    count: 80,
    color: "#DCFCE6",
  },
  {
    name: "Money",
    count: 80,
    color: "#F4E7FF",
  },
];

export const Dashboard = () => {
  const { data: users } = useQuery(DASHBOARD_ALL_USERS, {
    variables: { startDate, endDate },
    fetchPolicy: "network-only",
  });

  console.log(users);

  // const { data: partners } = useQuery(DASHBOARD_ALL_PARTNERS, {
  //   variables: { startDate, endDate },
  //   fetchPolicy: "network-only",
  // });
  // const { data: posts } = useQuery(DASHBOARD_ALL_POSTS, {
  //   variables: { startDate, endDate },
  //   fetchPolicy: "network-only",
  // });

  return (
    <div className="p-[30px] space-y-4 min-h-[calc(100svh-81px)]  bg-gray-100">
      <div className="flex gap-5 justify-between ">
        <div className="p-5 bg-white rounded-lg border text-[#423F7A]  font-bold  w-[70%] flex flex-col justify-between">
          <h3>Today Summary</h3>
          <p className="text-sm font-medium text-muted-foreground">
            Monitoring Go Tuk Tuk Insights
          </p>
          <div className="flex gap-6">
            {SAMPLEDATA.map((e, index) => (
              <Card
                key={index}
                className={cn(
                  `bg-[#F4E7FF] text-[#423F7A] rounded-2xl shadow border-none w-[33%]`,
                  e.name === "Users" && "bg-[#fa919f]",
                  e.name === "Partners" && "bg-[#f6d499]",
                  e.name === "Posts" && "bg-[#9efebd]",
                  e.name === "Money" && "bg-[#cd99f8]"
                )}
              >
                <CardHeader>
                  <CardTitle>
                    <div
                      className={cn(
                        " inline-block shadow p-3 bg-[#FFE2E6] rounded-full",
                        e.name === "Users" && "bg-[#fab3be]",
                        e.name === "Partners" && "bg-[#f9deb0]",
                        e.name === "Posts" && "bg-[#a9fbc3]",
                        e.name === "Money" && "bg-[#d6a5fd]"
                      )}
                    >
                      <UserIcon />
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
        <PostDashboard />
      </div>
      <UsersAndPartners />
    </div>
  );
};
