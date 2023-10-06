"use client";

import { Box, Card, Main, Tab } from "@alex-mcgovern/boondoggle.design";
import Link from "next/link";
import React from "react";

export default function PageLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Main>
      <Card>
        <h1>Loading</h1>
        <p>
          Here we are fetching data per-component on the server using React
          Server Components.
        </p>
        <Box display="flex" paddingY="space_2" gap="space_2">
          <Tab as={Link} href="/loading/smartphones">
            Smartphones
          </Tab>
          <Tab as={Link} href="/loading/laptops">
            Laptops
          </Tab>
          <Tab as={Link} href="/loading/sunglasses">
            Sunglasses
          </Tab>
        </Box>
        {children}
      </Card>
    </Main>
  );
}
