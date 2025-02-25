import { Suspense } from "react";

import Main from "./main";

export const dynamic = "force-dynamic";

export default function VehiclePage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Main />
    </Suspense>
  );
}
