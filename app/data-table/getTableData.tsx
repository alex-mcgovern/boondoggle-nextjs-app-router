import {
  DataTableCellButton,
  Icon,
  Box,
  Avatar,
} from "@alex-mcgovern/boondoggle.design";
import { Faker, en } from "@faker-js/faker";

import { createColumnHelper } from "@tanstack/react-table";

const faker = new Faker({ locale: [en] });

faker.seed(42);

type TableData = {
  /**
   * User's email address
   */
  email_address: string;

  /**
   * User's first name
   */
  first_name: string;

  /**
   * User ID
   */
  id: string;

  /**
   * User's last name
   */
  last_name: string;

  /**
   * User's phone number
   */
  phone_number: string;
};

/**
 * Generate a mock account column.
 */
const generateRow = (): TableData => {
  return {
    email_address: faker.internet.email(),
    first_name: faker.person.firstName(),
    id: faker.string.uuid(),
    last_name: faker.person.lastName(),
    phone_number: faker.phone.number(),
  };
};

export const DATA = Array.from({ length: 30 }, generateRow);

const columnHelper = createColumnHelper<TableData>();

export const COLUMNS = [
  columnHelper.accessor(
    (row) => {
      return `${row.first_name} ${row.last_name} ${row.email_address}`;
    },
    {
      cell: ({ row }) => {
        return (
          <Box alignItems="center" display="flex" gap="space_4">
            <Avatar
              firstName={row.original.first_name}
              lastName={row.original.last_name}
              size={40}
            />
            <Box>
              <Box fontWeight="medium">
                {row.original.first_name} {row.original.last_name}
              </Box>
              <Box color="text_low_contrast" fontStyle="bodySm">
                {row.original.email_address}
              </Box>
            </Box>
          </Box>
        );
      },
      header: () => {
        return "Team member";
      },
      id: "member",
    }
  ),
  columnHelper.accessor("phone_number", {
    cell: (info) => {
      return info.getValue();
    },
    header: () => {
      return "Phone number";
    },
  }),
  columnHelper.accessor("id", {
    cell: (info) => {
      return info.getValue();
    },
    header: () => {
      return "User ID";
    },
  }),
];
