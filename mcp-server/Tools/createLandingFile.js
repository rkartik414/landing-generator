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

async function createLandingFile({ sessionId }) {
  if (!sessionId) {
    throw new Error('sessionId is required');
  }

  const session = readSession(sessionId);
  const buildPlan = session.workflow?.figmaBuildPlan;

  if (!buildPlan) {
    throw new Error(`No figmaBuildPlan found in session: ${sessionId}`);
  }

  const adapterResult = figmaEngine.buildFigmaAdapterResult(session, buildPlan);
  const file = adapterResult.file;

  session.figma = session.figma || {};
  session.figma.fileId = file.fileId;
  session.figma.fileName = file.fileName;
  session.figma.fileUrl = file.fileUrl;
  session.figma.syncStatus = file.syncStatus;
  session.figma.lastSyncAt = file.lastSyncAt;
  session.figma.pages = file.pages;

  session.logs = Array.isArray(session.logs) ? session.logs : [];
  session.logs.push({
    at: new Date().toISOString(),
    type: 'mcp',
    step: 'create-landing-file',
    message: `Created adapter-backed placeholder Figma file ${file.fileId}`
  });

  writeSession(session);

  return {
    sessionId,
    adapter: adapterResult.adapter,
    executionMode: adapterResult.executionMode,
    readyForRealFigma: adapterResult.readyForRealFigma,
    fileId: file.fileId,
    fileName: file.fileName,
    fileUrl: file.fileUrl,
    syncStatus: file.syncStatus,
    pages: file.pages
  };
}

module.exports = {
  createLandingFile
};