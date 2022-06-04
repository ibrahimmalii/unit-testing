import { promises as fs } from 'fs';
export async function logger(fn) {
  if (fn) {
    fn();
  }
  return fs.writeFile('data', 'welcome');
}


