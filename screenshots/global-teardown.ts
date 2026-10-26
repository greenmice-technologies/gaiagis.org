import { existsSync, readFileSync, rmSync } from 'node:fs';
import { CREATED_LOG, deleteWorkspaceById } from './helpers';

/** Safety net: removes every workspace the specs created, even when a test timed out before its own cleanup. */
export default async function globalTeardown(): Promise<void> {
  if (!existsSync(CREATED_LOG)) {
    return;
  }
  const ids = new Set(readFileSync(CREATED_LOG, 'utf8').split('\n').filter(Boolean).map(Number));
  for (const id of ids) {
    await deleteWorkspaceById(id).catch(() => undefined);
  }
  rmSync(CREATED_LOG, { force: true });
}
