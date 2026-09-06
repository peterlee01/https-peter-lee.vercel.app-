import { readFile } from "fs/promises";
import path from "path";

// Serves the resume with an explicit Content-Disposition filename — Vercel's
// static file server sends its own "filename=resume.pdf" header for files in
// public/, which browsers prioritize over an <a download="..."> attribute.
export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  const file = await readFile(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Peter_Lee_Resume_090526.pdf"',
    },
  });
}
