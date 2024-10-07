'use client'
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import pizzas from "@/components/pizzaData";
import PizzaItem from "@/components/PizzaItem";
import { Grid4x4 } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function ResponsiveGrid() {
  return (
    <div>
      <Box mx={{ xs: 10, sm: 8, md: 12, lg: 12 }}>
        <Grid
          className="gr"
          container
          spacing={{ xs: 5, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          {pizzas.map((_, index) => (
            <Grid
              className="flex justify-center"
              key={index}
              size={{ xs: 4, sm: 4, md: 4, lg: 3 }}
            >
              <PizzaItem key={index} id={index} color="bg-peachblossom" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
