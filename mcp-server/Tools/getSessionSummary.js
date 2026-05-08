const path = require('path');
const fs = require('fs');

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

async function getSessionSummary({ sessionId }) {
  if (!sessionId) {
    throw new Error('sessionId is required');
  }

  const session = readSession(sessionId);

  return {
    sessionId: session.sessionId,
    status: session.status,
    productName: session.productName,
    pageType: session.pageType,
    createdAt: session.createdAt,
    updatedAt: session.updatedAt,
        figma: {
      fileId: session.figma?.fileId || null,
      fileName: session.figma?.fileName || null,
      syncStatus: session.figma?.syncStatus || 'not-started',
      pageCount: Array.isArray(session.figma?.pages) ? session.figma.pages.length : 0,
      desktopSectionCount: session.workflow?.figmaBuildPlan?.buildSummary?.desktopSectionCount || 0,
      mobileSectionCount: session.workflow?.figmaBuildPlan?.buildSummary?.mobileSectionCount || 0
    },
    workflow: {
      hasContentMap: !!session.workflow?.contentMap,
      hasReferenceMap: !!session.workflow?.referenceMap,
      hasPersonality: !!session.workflow?.personality,
      hasDesignIntent: !!session.workflow?.designIntent,
      hasFigmaBuildPlan: !!session.workflow?.figmaBuildPlan,
      hasBlueprint: !!session.workflow?.blueprint,
      hasMediaPlan: !!session.workflow?.mediaPlan
    }
  };
}

module.exports = {
  getSessionSummary
};