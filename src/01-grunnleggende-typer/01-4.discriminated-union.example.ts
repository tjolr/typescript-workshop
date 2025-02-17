interface RequestLoading {
  status: "loading";
}

interface RequestError {
  status: "error";
  error: {
    message: string;
    code?: number;
  };
}

interface RequestSuccess {
  status: "success";
  data: unknown;
}

type RequestStatus = RequestLoading | RequestError | RequestSuccess;

// Eksempelbruk
function handleState(state: RequestStatus) {
  switch (state.status) {
    case "loading":
      return "Loading data...";
    case "error":
      return `Error ${state.error.code}: ${state.error.message}`;
    case "success":
      return `Data loaded: ${state.data}`;
  }
}
