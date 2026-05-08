const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const {
  ListToolsRequestSchema,
  CallToolRequestSchema
} = require('@modelcontextprotocol/sdk/types.js');

const { getSessionSummary } = require('./Tools/getSessionSummary');
const { createLandingFile } = require('./Tools/createLandingFile');
const { buildSectionsFromPlan } = require('./Tools/buildSectionsFromPlan');

const server = new Server(
  {
    name: 'techjockey-design-mcp',
    version: '0.1.0'
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_session_summary',
        description: 'Return summary of a saved design session',
        inputSchema: {
          type: 'object',
          properties: {
            sessionId: { type: 'string' }
          },
          required: ['sessionId']
        }
      },
      {
        name: 'create_landing_file',
        description: 'Create placeholder Figma file metadata from a saved design session',
        inputSchema: {
          type: 'object',
          properties: {
            sessionId: { type: 'string' }
          },
          required: ['sessionId']
        }
      },
      {
        name: 'build_sections_from_plan',
        description: 'Build section execution payload from saved figmaBuildPlan',
        inputSchema: {
          type: 'object',
          properties: {
            sessionId: { type: 'string' },
            pageName: { type: 'string' }
          },
          required: ['sessionId']
        }
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  try {
    let result;

    if (name === 'get_session_summary') {
      result = await getSessionSummary(args);
    } else if (name === 'create_landing_file') {
      result = await createLandingFile(args);
    } else if (name === 'build_sections_from_plan') {
      result = await buildSectionsFromPlan(args);
    } else {
      throw new Error(`Unknown tool: ${name}`);
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2)
        }
      ]
    };
  } catch (error) {
    return {
      isError: true,
      content: [
        {
          type: 'text',
          text: error.message
        }
      ]
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error('MCP server failed:', err);
  process.exit(1);
});