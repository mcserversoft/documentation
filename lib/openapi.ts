import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  input: { v2: './apis/v2.yml', v1: './apis/v1.yml' },
});
