import { useMutation } from "@tanstack/react-query";
import { orpc } from "../lib/api";

/** Submits the website quote form — stores the lead and emails the owners. */
export function useCreateLead() {
  return useMutation(orpc.leads.create.mutationOptions());
}
