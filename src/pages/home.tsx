import React from "react";
import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
          <PieChart
          title="Properties for Rent"
          value={650}
          series={[60, 40]}
          colors={["#475be8", "#e4e8ef"]}
        />
          <PieChart
          title="Total Customers"
          value={5684}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
          <PieChart
          title="Properties for cities"
          value={555}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>

      <Stack mt="25px" width="1000%" direction={{xs: 'column', lg: 'row'}}>
        <TotalRevenue/>
        <PropertyReferrals/>
      </Stack>
    </Box>
  );
};

export default home;
