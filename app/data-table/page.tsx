"use client";

import {
  Box,
  Button,
  Card,
  DataTable,
  FlagGb,
  FlagIe,
  Form,
  FormInput,
  FormInputCurrency,
  FormInputDate,
  FormSelectSingle,
  FormSubmitButton,
  Icon,
  Main,
  getSprinkles,
} from "@alex-mcgovern/boondoggle.design";
import { faHome } from "@fortawesome/pro-solid-svg-icons";
import { COLUMNS, DATA } from "./getTableData";

export default function PageDataTable() {
  return (
    <Main>
      <Card>
        <h1>Data table</h1>
        <p>Uses `react-table`</p>
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
          data={DATA}
        />
      </Card>
    </Main>
  );
}
