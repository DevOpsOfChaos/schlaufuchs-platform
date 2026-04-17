import type { APIRoute } from "astro";
import { getAreaAuditData } from "../../data/areaAudit";

export const GET: APIRoute = async () => {
  const { stats, unmappedRows, remappedRows, uniqueUnmappedPaths } = await getAreaAuditData();

  return new Response(JSON.stringify({
    stats,
    uniqueUnmappedPaths,
    unmappedRows,
    remappedRows,
  }, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};
