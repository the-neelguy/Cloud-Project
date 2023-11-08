import { useEffect, useState } from "react";
import { gSSP } from "app/blitz-server";
import { SessionContext } from "@blitzjs/auth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Card, LineChart, Title } from "@tremor/react";

type Props = {
  userId: unknown;
  publicData: SessionContext["$publicData"];
};

const fetchAPI = async (): Promise<{
  items: Record<string, any>[];
  count: number;
}> => {
  const response = await axios.get(
    `/api/`
  );
  return response.data;
};

const blynkAPI = async (): Promise<{
  items: string;
  count: number;
}> => {
  const response = await axios.get(
    `https://blynk.cloud/external/api/get?token=ifvKiQf0aujDNSDcnSxPVuxSwWN5v3Vk&dataStreamId=1`
  );
  return response.data;
}

export const getServerSideProps = gSSP<Props>(async ({ ctx }) => {
  const { session } = ctx;
  if (!session.userId) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        userId: session.userId,
        publicData: session.$publicData,
      },
    };
  }
});

export default function Home() {
  const [motorState, setMotorState] = useState("OFF");
  useEffect(() => {
    const websocket = new WebSocket(
      "wss://nmuhd2ezxc.execute-api.us-east-1.amazonaws.com/production"
    );
    websocket.onopen = () => {
      console.log("Connected to WebSocket");
    };
    websocket.onmessage = (event) => {
      console.log("Message received from server: ", event.data);
      setMotorState(event.data);
    }
    return () => {
      websocket.close();
    };
  }, []);
  const { data } = useQuery({
    queryKey: ["api"],
    queryFn: () => fetchAPI(),
    refetchInterval: 1000,
    suspense: false,
  });


  const formattedData = data?.items.map((item) => {
    return {
      id: new Date(item.id).toISOString(),
      soil: item.soil,
    };
  }).sort((a, b) => {
    return new Date(a.id).getTime() - new Date(b.id).getTime();
  })



  useQuery({
    queryKey: ["blynk"],
    queryFn: () => blynkAPI(),
    refetchInterval: 1000,
    suspense: false,
    async onSettled(data) {
      console.log(data);
      await fetch("/api/soil/",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        body: JSON.stringify({
          soil: data,
          id: (new Date()).toISOString(),
        }),
      })
    },
  });
  return (
    <>
      <Card>
        <Title>Soil Moisture Readings</Title>
        <LineChart
          className="h-72 mt-4"
          data={formattedData??[]}
          index="id"
          categories={["soil"]}
          colors={["blue"]}
          yAxisWidth={30}
        />
      </Card>
    </>
  );
}

Home.suppressFirstRenderFlicker = true;
