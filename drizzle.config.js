import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://accounts:npg_2hSyA4VmNdPe@ep-white-thunder-a85177qm-pooler.eastus2.azure.neon.tech/ai-roomdesign?sslmode=require'
    ,
  },
});
