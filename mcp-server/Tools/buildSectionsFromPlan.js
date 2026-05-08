const path = require('path');
const fs = require('fs');
const figmaEngine = require('../../modules/figmaEngine');

const SESSIONS_DIR = path.join(__dirname, '../../output/design-sessions');

function getSessionFilePath(sessionId) {
  return path.join(SESSIONS_DIR, `${sessionId}.json`);
}

function readSession(sessionId) {
  const filePath = getSessionFilePath(sessionId);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Session not found: ${sessionId}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeSession(session) {
  const filePath = getSessionFilePath(session.sessionId);
  fs.writeFileSync(filePath, JSON.stringify(session, null, 2), 'utf8');
}

async function buildSectionsFromPlan({ sessionId, pageName }) {
  if (!sessionId) {
    throw new Error('sessionId is required');
  }

  const session = readSession(sessionId);
  const buildPlan = session.workflow?.figmaBuildPlan;

  if (!buildPlan || !Array.isArray(buildPlan.pages)) {
    throw new Error(`No valid figmaBuildPlan found in session: ${sessionId}`);
  }

  const targetPage =
    buildPlan.pages.find((p) => p.name === pageName) ||
    buildPlan.pages[0];

  if (!targetPage) {
    throw new Error(`No page available in figmaBuildPlan for session: ${sessionId}`);
  }

  const executionPlan = figmaEngine.prepareSectionExecutionPlan(targetPage);

  session.figma = session.figma || {};
  session.figma.frames = Array.isArray(session.figma.frames) ? session.figma.frames : [];
  session.figma.nodes = session.figma.nodes || {};

  session.figma.frames.push({
    pageName: executionPlan.pageName,
    frameName: executionPlan.frameName,
    width: targetPage.frame?.width || null,
    builtSectionCount: executionPlan.builtSectionCount
  });

  session.figma.nodes[executionPlan.pageName] = executionPlan.builtSections;
  session.figma.syncStatus = 'sections-planned';
  session.figma.lastSyncAt = new Date().toISOString();

  session.logs = Array.isArray(session.logs) ? session.logs : [];
  session.logs.push({
    at: new Date().toISOString(),
    type: 'mcp',
    step: 'build-sections-from-plan',
    message: `Prepared ${executionPlan.builtSectionCount} sections for ${executionPlan.pageName}`
  });

  writeSession(session);

  return {
    sessionId,
    pageName: executionPlan.pageName,
    frameName: executionPlan.frameName,
    builtSectionCount: executionPlan.builtSectionCount,
    builtSections: executionPlan.builtSections,
    adapter: 'figma-placeholder-adapter'
  };
}

module.exports = {
  buildSectionsFromPlan
};