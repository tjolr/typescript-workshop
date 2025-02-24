// ===============================================================
// Tips 1: typesterke returtyper fra eksterne biblioteker
// ===============================================================

import axios from "axios";
import { Equal, Expect } from "../.helpers/total-typescript-helpers";

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsersWithAxios(): Promise<User[]> {
  const response = await axios.get<User[]>("https://api.example.com/users");
  return response.data;
}

type test = Expect<
  Equal<Awaited<ReturnType<typeof fetchUsersWithAxios>>, User[]>
>; //🚀
