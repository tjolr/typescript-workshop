import { useQuery } from "@tanstack/vue-query";
import { Equal, Expect } from "../.helpers/total-typescript-helpers";

interface Transaksjon {
  belop: number;
  dato: Date;
  eier: string;
  id: string;
  type: "uttak" | "innskudd" | "overføring";
}

const useTransaksjonQuery = (id: string) => {
  // OPPGAVE: send inn et generisk argument til useQuery for å
  // typesikre returtypen fra fetch-kallet
  return useQuery({
    queryKey: ["transaksjon", id],
    queryFn: async () => {
      const response = await fetch(`/api/transaksjon/${id}`);
      return response.json();
    },
  });
};

const { data } = useTransaksjonQuery("123");

type tester = [Expect<Equal<typeof data.value, Transaksjon | undefined>>];
