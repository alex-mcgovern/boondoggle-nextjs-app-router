"use client";

import {
  DataTableCellButton,
  Icon,
  Box,
  Avatar,
  DataTable,
} from "@alex-mcgovern/boondoggle.design";

import { createColumnHelper } from "@tanstack/react-table";
import { Product } from "./page";

const columnHelper = createColumnHelper<Product>();

export const COLUMNS = [
  columnHelper.accessor(
    (row) => {
      return `${row.title} ${row.brand}`;
    },
    {
      cell: ({ row }) => {
        return (
          <Box alignItems="center" display="flex" gap="space_4">
            <Avatar
              firstName={row.original.title}
              src={row.original.thumbnail}
              size={40}
            />
            <Box>
              <Box fontWeight="medium">{row.original.title}</Box>
              <Box color="text_low_contrast" fontStyle="bodySm">
                {row.original.brand}
              </Box>
            </Box>
          </Box>
        );
      },
      header: () => {
        return "Title";
      },
      id: "title",
    }
  ),
  columnHelper.accessor("price", {
    cell: (info) => {
      return info.getValue();
    },
    header: () => {
      return "Price";
    },
  }),
  columnHelper.accessor("stock", {
    cell: (info) => {
      return info.getValue();
    },
    header: () => {
      return "Stock";
    },
  }),
];

export const ProductsTable = ({ products }: { products: Array<Product> }) => {
  return (
    <DataTable
      isPaginated
      strNext="Next"
      strPrev="Prev"
      isFilterable
      strClearAllFilters="Clear all filters"
      strClearFilterInput="Clear filter input"
      strFilterPlaceholder="Filter..."
      strNoResults="No results found"
      strPage="Page"
      strResults="Results"
      columns={COLUMNS}
      data={products}
    />
  );
};

export const ProductsTableLoading = () => {
  return (
    <DataTable
      isPaginated
      strNext="Next"
      strPrev="Prev"
      isFilterable
      strClearAllFilters="Clear all filters"
      strClearFilterInput="Clear filter input"
      strFilterPlaceholder="Filter..."
      strNoResults="No results found"
      strPage="Page"
      strResults="Results"
      columns={COLUMNS}
      data={[]}
      isLoading
    />
  );
};
