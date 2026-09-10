import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CustomerTable } from "@/components/CustomerTable";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/all-customers")({
  head: () => ({
    meta: [
      { title: "All Customers — Northrail Contact Desk" },
      {
        name: "description",
        content:
          "Search the full customer database by name, BCN, owner, tier or contact status. Accounts owned by other salespeople are read-only.",
      },
      { property: "og:title", content: "All Customers — Northrail Contact Desk" },
      {
        property: "og:description",
        content: "The complete customer master data set with ownership and contact status.",
      },
    ],
  }),
  component: AllCustomers;
});

function AllCustomers() {
  return null;
}
