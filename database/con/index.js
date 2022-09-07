import { promises as fs } from 'fs';
import * as path from 'path';
import yaml from 'js-yaml';


async function read() {
  const file = path.resolve(process.cwd(), 'database/con/db.yaml');
  const data = await fs.readFile(file, 'utf-8');
  return yaml.load(data);
}


export async function select() {
  return read();
}
