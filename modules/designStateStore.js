const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const STORE_DIR = path.join(__dirname, '../output/design-sessions');

function ensureStoreDir() {
  if (!fs.existsSync(STORE_DIR)) {
    fs.mkdirSync(STORE_DIR, { recursive: true });
  }
}

function createSessionId(prefix = 'ds') {
  return `${prefix}_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
}

function getSessionPath(sessionId) {
  ensureStoreDir();
  return path.join(STORE_DIR, `${sessionId}.json`);
}

function adjustLayoutBasedOnUserBehavior(userData) {
    if (userData.scrollDepth > 50) {
        // Adjust layout for deeper engagement
        applyLayoutForDeepScroll();
    } else if (userData.timeSpent > 30) {
        // Adjust design for long-time users
        applyLayoutForLongEngagement();
    }
}

function createDesignSession(initialData = {}) {
  ensureStoreDir();

  const sessionId = initialData.sessionId || createSessionId();
  const now = new Date().toISOString();

  const session = {
    sessionId,
    createdAt: now,
    updatedAt: now,
    status: 'created',
    productName: initialData.productName || '',
    pageType: initialData.pageType || 'single',
    source: {
      brandURL: initialData.brandURL || '',
      competitorURL: initialData.competitorURL || '',
      parsedSectionCount: initialData.parsedSectionCount || 0
    },
    workflow: {
      contentMap: null,
      referenceMap: null,
      personality: null,
      designIntent: null,
      figmaBuildPlan: null,
      heroStrategy: null,
      blueprint: null,
      mediaPlan: null
    },
    figma: {
      fileId: null,
      fileName: null,
      fileUrl: null,
      pages: [],
      frames: [],
      nodes: {},
      syncStatus: 'not-started',
      lastSyncAt: null
    },
    outputs: {
      htmlFilename: initialData.htmlFilename || null
    },
    logs: []
  };

  const filePath = getSessionPath(sessionId);
  fs.writeFileSync(filePath, JSON.stringify(session, null, 2), 'utf8');
  return session;
}

function readDesignSession(sessionId) {
  const filePath = getSessionPath(sessionId);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeDesignSession(session) {
  if (!session || !session.sessionId) {
    throw new Error('writeDesignSession requires a session object with sessionId');
  }

  session.updatedAt = new Date().toISOString();

  const filePath = getSessionPath(session.sessionId);
  fs.writeFileSync(filePath, JSON.stringify(session, null, 2), 'utf8');
  return session;
}

function updateDesignSession(sessionId, patch = {}) {
  const existing = readDesignSession(sessionId);
  if (!existing) throw new Error(`Design session not found: ${sessionId}`);

  const next = deepMerge(existing, patch);
  next.updatedAt = new Date().toISOString();

  const filePath = getSessionPath(sessionId);
  fs.writeFileSync(filePath, JSON.stringify(next, null, 2), 'utf8');
  return next;
}

function appendSessionLog(sessionId, entry) {
  const session = readDesignSession(sessionId);
  if (!session) throw new Error(`Design session not found: ${sessionId}`);

  session.logs = Array.isArray(session.logs) ? session.logs : [];
  session.logs.push({
    at: new Date().toISOString(),
    ...entry
  });

  return writeDesignSession(session);
}

function deepMerge(target, source) {
  if (!source || typeof source !== 'object') return target;
  if (!target || typeof target !== 'object') return source;

  const output = Array.isArray(target) ? [...target] : { ...target };

  for (const key of Object.keys(source)) {
    const sourceValue = source[key];
    const targetValue = output[key];

    if (
      sourceValue &&
      typeof sourceValue === 'object' &&
      !Array.isArray(sourceValue) &&
      targetValue &&
      typeof targetValue === 'object' &&
      !Array.isArray(targetValue)
    ) {
      output[key] = deepMerge(targetValue, sourceValue);
    } else {
      output[key] = sourceValue;
    }
  }

  return output;
}

module.exports = {
  STORE_DIR,
  createSessionId,
  createDesignSession,
  readDesignSession,
  writeDesignSession,
  updateDesignSession,
  appendSessionLog
};